import React, { useRef, useEffect, useState } from 'react';

const SystemTerminal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([{ text: 'System Terminal v1.0.0', type: 'system' }]);
  const inputRef = useRef(null);
  const endRef = useRef(null);

  const commands = {
    help: 'Available commands: help, about, projects, skills, contact, clear, theme [light/dark]',
    about: 'This is a portfolio website built with Next.js and React, styled to look like Ubuntu 20.04.',
    projects: 'Check out my projects on GitHub: https://github.com/yourusername',
    skills: 'Technologies I work with: JavaScript, React, Node.js, Python, and more!',
    contact: 'Email: your.email@example.com | LinkedIn: linkedin.com/in/yourprofile',
    clear: () => setOutput([]),
    theme: (args) => {
      const theme = args[0];
      if (['light', 'dark'].includes(theme)) {
        localStorage.setItem('darkMode', theme === 'dark');
        document.documentElement.classList.toggle('dark', theme === 'dark');
        return `Switched to ${theme} theme`;
      }
      return 'Usage: theme [light|dark]';
    },
    // Add more commands here
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      if (!command) return;

      // Add command to output
      setOutput(prev => [...prev, { text: `$ ${command}`, type: 'command' }]);
      
      // Process command
      const [cmd, ...args] = command.split(' ');
      const cmdHandler = commands[cmd.toLowerCase()];
      
      let result;
      if (cmdHandler) {
        result = typeof cmdHandler === 'function' ? cmdHandler(args) : cmdHandler;
      } else {
        result = `Command not found: ${cmd}. Type 'help' for available commands.`;
      }
      
      // Add result to output
      if (result) {
        setOutput(prev => [...prev, { text: result, type: 'output' }]);
      }
      
      // Clear input
      setInput('');
    }
  };

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="h-full flex flex-col bg-gray-900 text-green-400 font-mono p-4 overflow-auto">
      <div className="flex-1 overflow-y-auto mb-2">
        {output.map((item, index) => (
          <div key={index} className={`mb-1 ${item.type === 'command' ? 'text-blue-400' : ''}`}>
            {item.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex items-center">
        <span className="text-yellow-400 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="flex-1 bg-transparent border-none outline-none text-green-400"
          placeholder="Type 'help' for available commands"
        />
      </div>
    </div>
  );
};

export default SystemTerminal;
