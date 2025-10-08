import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiWifi, FiVolume2, FiBattery, FiSun, FiMoon, FiSettings, FiBell } from 'react-icons/fi';

export default function SystemBar({ toggleDarkMode, isDarkMode }) {
  const [time, setTime] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'System update available', read: false },
    { id: 2, message: 'New message from John', read: true },
  ]);

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="fixed bottom-0 right-0 left-0 bg-black/70 backdrop-blur-lg text-white p-2 flex justify-between items-center z-50 border-t border-gray-700">
      <div className="flex items-center space-x-4 ml-4">
        <button 
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          onClick={() => router.push('/settings')}
          title="Settings"
        >
          <FiSettings size={20} />
        </button>
        
        <div className="relative">
          <button 
            className="p-2 rounded-full hover:bg-gray-700 transition-colors relative"
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
          >
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
            <FiBell size={20} />
          </button>
          
          {showNotifications && (
            <div className="absolute bottom-full mb-2 right-0 w-80 bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="p-3 border-b border-gray-700 flex justify-between items-center">
                <h3 className="font-medium">Notifications</h3>
                <button 
                  className="text-blue-400 text-sm"
                  onClick={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
                >
                  Mark all as read
                </button>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-3 hover:bg-gray-700 cursor-pointer ${!notification.read ? 'bg-gray-700/50' : ''}`}
                      onClick={() => {
                        setNotifications(notifications.map(n => 
                          n.id === notification.id ? { ...n, read: true } : n
                        ));
                        // Handle notification click
                      }}
                    >
                      <div className="flex items-start">
                        <div className="flex-1">
                          <p className="text-sm">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">Just now</p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-400">
                    No new notifications
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        <div className="flex items-center space-x-1">
          <FiWifi size={18} />
          <span className="text-sm">WiFi</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiVolume2 size={18} />
          <span className="text-sm">100%</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiBattery size={20} />
          <span className="text-sm">87%</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 mr-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
        
        <div className="text-right">
          <div className="text-sm font-medium">{formatTime(time)}</div>
          <div className="text-xs text-gray-400">{formatDate(time)}</div>
        </div>
      </div>
      
      <style jsx>{`
        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: #ef4444;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
