import React from 'react';
import DeveloperMode from '../components/DeveloperMode';
import { SITE_MODE } from '../lib/modeConfig';

export default function Custom404() {
  // Always show DeveloperMode when developer mode is active
  if (SITE_MODE.DEVELOPER_MODE) {
    return <DeveloperMode />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6">The page you are looking for does not exist.</p>
      <a href="/" className="px-4 py-2 bg-[#E95420] rounded-lg text-white font-medium hover:bg-opacity-90">
        Return Home
      </a>
    </div>
  );
}
