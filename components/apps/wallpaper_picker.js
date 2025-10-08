import React from 'react';
import { UbuntuApp } from '../base/ubuntu_app';
import { Window } from '../base/window';

export class WallpaperPicker extends UbuntuApp {
  constructor() {
    super();
    this.name = 'Wallpaper Picker';
    this.icon = '/images/logos/wallpaper.png';
    this.package = 'wallpaper-picker';
    this.state = {
      selectedWallpaper: localStorage.getItem('wallpaper') || 'wall-1',
      wallpapers: [
        { id: 'wall-1', name: 'Ubuntu Default', thumbnail: '/images/wallpapers/wall-1.webp' },
        { id: 'wall-2', name: 'Ubuntu Dark', thumbnail: '/images/wallpapers/wall-2.webp' },
        { id: 'wall-3', name: 'Mountains', thumbnail: '/images/wallpapers/wall-3.webp' },
        { id: 'wall-4', name: 'Beach', thumbnail: '/images/wallpapers/wall-4.webp' },
        { id: 'wall-5', name: 'Abstract', thumbnail: '/images/wallpapers/wall-5.webp' },
      ]
    };
  }

  setWallpaper = (wallpaperId) => {
    this.setState({ selectedWallpaper: wallpaperId });
    localStorage.setItem('wallpaper', wallpaperId);
    // Dispatch event to update wallpaper
    window.dispatchEvent(new CustomEvent('wallpaperChange', { detail: { wallpaperId } }));
  };

  renderApp() {
    return (
      <Window
        title={this.name}
        onClose={this.close}
        appId={this.props.appId}
        width="800px"
        height="600px"
      >
        <div className="p-6">
          <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-6">
            Choose a Wallpaper
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {this.state.wallpapers.map((wallpaper) => (
              <div 
                key={wallpaper.id}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-200 transform hover:scale-105 ${
                  this.state.selectedWallpaper === wallpaper.id ? 'ring-4 ring-blue-500' : ''
                }`}
                onClick={() => this.setWallpaper(wallpaper.id)}
              >
                <img 
                  src={wallpaper.thumbnail} 
                  alt={wallpaper.name}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium">{wallpaper.name}</span>
                </div>
                {this.state.selectedWallpaper === wallpaper.id && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
              Custom Wallpaper
            </h3>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                id="custom-wallpaper"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const wallpaperId = 'custom-wallpaper';
                      localStorage.setItem('customWallpaper', event.target.result);
                      this.setWallpaper(wallpaperId);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <label 
                htmlFor="custom-wallpaper"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer transition-colors"
              >
                Upload Custom Wallpaper
              </label>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                JPG, PNG, or WebP. Max 5MB.
              </span>
            </div>
          </div>
        </div>
      </Window>
    );
  }
}

export default WallpaperPicker;
