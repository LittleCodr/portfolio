
const config = {
  owner: 'Mayank Agrawal',
  portfolioUrl: 'https://littlecodr.github.io/portfolio',
  email: 'littlecodr@gmail.com',
  authorizedDomains: [
    'mayank0108.netlify.app',
    'mayank1406.pro',
    'localhost',
    '127.0.0.1'
  ],
  watermarkText: '© Mayank Agrawal | littlecodr.github.io/portfolio',
  consoleMessage: `%c🔒 Portfolio Protection Active 🔒\n\nThis portfolio belongs to Mayank Agrawal (LittleCodr).\nPlease respect the owner's work and do not copy without permission.\n\nContact: littlecodr@gmail.com\n`,
  consoleStyle: 'color: #4CAF50; font-weight: bold; font-size: 12px;'
};

function addWatermark() {
  const watermark = document.createElement('div');
  Object.assign(watermark.style, {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    zIndex: '9999',
    opacity: '0.7',
    pointerEvents: 'none',
    fontSize: '12px',
    color: '#666666',
    fontFamily: 'monospace',
    userSelect: 'none',
    padding: '5px 10px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '4px',
    border: '1px solid #e0e0e0'
  });
  
  const text = document.createElement('span');
  text.textContent = config.watermarkText;
  watermark.appendChild(text);
  
  document.body.appendChild(watermark);
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (!document.body.contains(watermark)) {
        document.body.appendChild(watermark);
      }
    });
  });
  
  observer.observe(document.body, { childList: true });
  
  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    e.preventDefault();
  });
  
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.shiftKey && e.key === 'J') ||
      (e.ctrlKey && e.key === 'u')
    ) {
      e.preventDefault();
    }
  });
}

function addConsoleMessage() {
  console.log(config.consoleMessage, config.consoleStyle);
  
  let devtoolsOpen = false;
  const devtools = {
    isOpen: false,
    orientation: null
  };
  
  const threshold = 160;
  const emitEvent = (isOpen, orientation) => {
    if (devtools.isOpen !== isOpen || devtools.orientation !== orientation) {
      devtools.isOpen = isOpen;
      devtools.orientation = orientation;
      
      if (isOpen) {
        console.log('%c🛑 Developer Tools Detected', 'color: red; font-weight: bold; font-size: 24px;');
        console.log('%c⚠️ This portfolio is protected. Please respect the owner\'s work.', 'color: orange; font-size: 16px;');
        console.log(`%c👤 Owner: ${config.owner}`, 'color: #4CAF50;');
        console.log(`%c📧 Contact: ${config.email}`, 'color: #4CAF50;');
      }
    }
  };
  
  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    const orientation = widthThreshold ? 'vertical' : 'horizontal';
    
    if (!(heightThreshold && widthThreshold) && 
        ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || 
         widthThreshold || 
         heightThreshold)) {
      emitEvent(true, orientation);
    } else {
      emitEvent(false, null);
    }
  }, 500);
}

// Check if current domain is authorized
function isAuthorizedDomain() {
  const currentHostname = window.location.hostname;
  return config.authorizedDomains.some(domain => 
    currentHostname === domain || 
    currentHostname.endsWith('.' + domain)
  );
}

// Initialize protection
export function initPortfolioProtection() {
  // Skip protection for authorized domains
  if (isAuthorizedDomain()) {
    console.log('%c✅ Authorized domain detected - Protection disabled', 'color: #4CAF50; font-weight: bold');
    return;
  }

  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      addWatermark();
      addConsoleMessage();
    });
  } else {
    addWatermark();
    addConsoleMessage();
  }
  
  // Add meta tag to prevent indexing if not on an authorized domain
  if (!isAuthorizedDomain() && window.location.hostname !== 'littlecodr.github.io') {
    const meta = document.createElement('meta');
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    
    // Show a warning message
    const warning = document.createElement('div');
    warning.className = 'unauthorized-warning';
    
    const warningText = document.createElement('span');
    warningText.textContent = '⚠️ This is an unauthorized copy of Mayank Agrawal\'s portfolio. ';
    
    const link = document.createElement('a');
    link.href = 'https://mayank1406.pro';
    link.textContent = 'Visit the official portfolio here';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    warning.appendChild(warningText);
    warning.appendChild(link);
    
    document.body.prepend(warning);
  }
}
// Export the config for other components to use
export const portfolioConfig = config;
