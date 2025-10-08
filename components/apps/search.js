import React from 'react';
import { UbuntuApp } from '../base/ubuntu_app';
import { Window } from '../base/window';

export class SearchApp extends UbuntuApp {
  constructor() {
    super();
    this.name = 'Search';
    this.icon = '/images/logos/search.png';
    this.package = 'search';
    this.state = {
      query: '',
      results: []
    };
  }

  searchApps = (query) => {
    // This would search through installed apps and files
    // For now, we'll just show some sample results
    const sampleResults = [
      { name: 'Terminal', type: 'app', icon: '/images/logos/terminal.png' },
      { name: 'Document.pdf', type: 'file', path: '/documents/Document.pdf' },
      { name: 'Settings', type: 'app', icon: '/images/logos/settings.png' },
    ];
    
    return sampleResults.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  handleSearch = (e) => {
    const query = e.target.value;
    this.setState({
      query,
      results: query.length > 0 ? this.searchApps(query) : []
    });
  };

  renderApp() {
    return (
      <Window
        title={this.name}
        onClose={this.close}
        appId={this.props.appId}
        width="600px"
        height="500px"
      >
        <div className="search-container p-4">
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-ub-grey text-white border border-ub-border focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search apps, files, and more..."
              value={this.state.query}
              onChange={this.handleSearch}
              autoFocus
            />
          </div>
          
          {this.state.results.length > 0 && (
            <div className="mt-4 space-y-2">
              {this.state.results.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 hover:bg-ub-warm-cursor/10 rounded-lg cursor-pointer"
                  onClick={() => this.props.openApp(item.type === 'app' ? item.name.toLowerCase() : '')}
                >
                  <img 
                    src={item.icon || '/images/logos/file.png'} 
                    alt={item.name} 
                    className="w-8 h-8 mr-3"
                  />
                  <div>
                    <div className="text-white">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.type}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {this.state.query && this.state.results.length === 0 && (
            <div className="mt-8 text-center text-gray-400">
              No results found for "{this.state.query}"
            </div>
          )}
        </div>
        
        <style jsx>{`
          .search-container {
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            height: 100%;
            overflow-y: auto;
          }
          
          input {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </Window>
    );
  }
}

export default SearchApp;
