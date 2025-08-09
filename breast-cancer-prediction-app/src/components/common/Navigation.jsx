import React from 'react';
import { Home, Database, Info, Activity } from 'lucide-react';
import AwarenessRibbon from './AwarenessRibbon';

/**
 * Navigation Header Component
 * Provides top-level navigation for the application
 * 
 * @param {Object} props - Component props
 * @param {string} props.activeTab - Currently active tab
 * @param {Function} props.setActiveTab - Function to change active tab
 * @returns {JSX.Element} Navigation component
 */
const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { 
      id: 'prediction', 
      icon: Home, 
      label: 'Prediction',
      description: 'AI Cancer Detection'
    },
    { 
      id: 'dataset', 
      icon: Database, 
      label: 'Dataset',
      description: 'Wisconsin WDBC Info'
    },
    { 
      id: 'about', 
      icon: Info, 
      label: 'About',
      description: 'Technology & Methodology'
    }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Awareness Ribbon */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <AwarenessRibbon size="w-8 h-8" className="floating-element" />
              <Activity className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <span className="text-xl font-bold gradient-text">
                MedPredict AI
              </span>
              <div className="text-xs text-gray-500 font-medium">
                Breast Cancer Detection
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-2">
            {navItems.map(({ id, icon: Icon, label, description }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 transform hover:scale-105 ${
                  activeTab === id 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
                aria-current={activeTab === id ? 'page' : undefined}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation indicator bar */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </nav>
  );
};

export default Navigation;