// Repo refreshed on 2025-11-15
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const stamp = 'Repo refreshed on 2025-11-15';

const skipDirectories = new Set(['.git', 'node_modules']);

const binaryExtensions = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.ico',
  '.mp3',
  '.mp4',
  '.mov',
  '.pdf',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot',
  '.zip'
]);

const jsLike = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']);

function ensureDirWalk(dirPath) {
  fs.readdirSync(dirPath, { withFileTypes: true }).forEach((entry) => {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (skipDirectories.has(entry.name)) {
        return;
      }
      ensureDirWalk(entryPath);
      return;
    }

    processFile(entryPath);
  });
}

function alreadyStamped(content) {
  return content.includes(stamp);
}

function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (binaryExtensions.has(ext)) {
    return;
  }

  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    return;
  }

  if (alreadyStamped(content)) {
    return;
  }

  const baseName = path.basename(filePath);
  let updated;

  if (jsLike.has(ext)) {
    updated = addJsComment(content);
  } else if (ext === '.css' || ext === '.scss' || ext === '.less') {
    updated = `/* ${stamp} */\n${content}`;
  } else if (ext === '.json') {
    updated = addJsonComment(content);
  } else if (ext === '.md' || ext === '.html') {
    updated = `<!-- ${stamp} -->\n${content}`;
  } else if (ext === '.txt' || baseName.toLowerCase() === 'license') {
    updated = `# ${stamp}\n${content}`;
  } else if (ext === '.svg') {
    updated = `<!-- ${stamp} -->\n${content}`;
  } else if (baseName.toLowerCase() === 'robots.txt') {
    updated = `# ${stamp}\n${content}`;
  } else if (!ext) {
    // Fallback for files without extension that are not binaries
    updated = `# ${stamp}\n${content}`;
  }

  if (typeof updated === 'string' && updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Stamped: ${path.relative(repoRoot, filePath)}`);
  }
}

function addJsComment(content) {
  const newline = content.includes('\r\n') ? '\r\n' : '\n';
  const lines = content.split(/\r?\n/);
  const directives = new Set([
    "'use client';",
    '"use client";',
    "'use server';",
    '"use server";',
    "'use strict';",
    '"use strict";'
  ]);
  let insertIndex = 0;

  while (insertIndex < lines.length && directives.has(lines[insertIndex].trim())) {
    insertIndex += 1;
  }

  const commentLine = `// ${stamp}`;
  lines.splice(insertIndex, 0, commentLine);
  return lines.join(newline);
}

function addJsonComment(content) {
  if (!content.trim().startsWith('{')) {
    return content;
  }

  if (content.includes('"_comment"')) {
    return content;
  }

  const newlineMatch = content.match(/\r?\n/);
  const newline = newlineMatch ? newlineMatch[0] : '\n';

  const insertLocation = content.indexOf('{') + 1;
  const indentMatch = content.match(/\{\s*(\r?\n)(\s*)/);
  const indent = indentMatch ? indentMatch[2] : '  ';
  const commentEntry = `${newline}${indent}"_comment": "${stamp}",`;
  return `${content.slice(0, insertLocation)}${commentEntry}${content.slice(insertLocation)}`;
}

ensureDirWalk(repoRoot);
