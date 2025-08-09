import React from 'react';
import { Shield, Target } from 'lucide-react';
import AwarenessRibbon from './AwarenessRibbon';

/**
 * Page Header Component
 * Dynamic header that changes content based on active tab
 * 
 * @param {Object} props - Component props
 * @param {string} props.activeTab - Currently active tab
 * @returns {JSX.Element} Page header component
 */
const PageHeader = ({ activeTab }) => {
  const getHeaderContent = () => {
    switch (activeTab) {
      case 'prediction':
        return {
          title: 'AI-Powered Cancer Detection',
          subtitle: 'Revolutionary machine learning algorithms providing precise diagnostic assistance for breast cancer detection',
          icons: [Shield, Target]
        };
      case 'dataset':
        return {
          title: 'Wisconsin Dataset Analysis',
          subtitle: 'Comprehensive analysis of the industry-standard Wisconsin Breast Cancer Dataset with 30 diagnostic features',
          icons: [Target, Shield]
        };
      case 'about':
        return {
          title: 'Advanced ML Technology',
          subtitle: 'Discover our cutting-edge approach to medical AI and the technology behind accurate cancer prediction',
          icons: [Shield, Target]
        };
      default:
        return {
          title: 'MedPredict AI',
          subtitle: 'Advanced breast cancer detection using machine learning',
          icons: [Shield, Target]
        };
    }
  };

  const { title, subtitle, icons } = getHeaderContent();

  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12"></div>
      
      {/* Floating shapes for visual interest */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Icons row */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <AwarenessRibbon size="w-12 h-12" className="animate-bounce" />
            {icons.map((Icon, index) => (
              <Icon 
                key={index} 
                className="h-12 w-12 text-white/80 floating-element" 
                style={{ animationDelay: `${index * 0.5}s` }}
              />
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Call to action indicator */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-white/70">
            <div className="w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
            <span className="text-sm font-medium">
              {activeTab === 'prediction' && 'Enter diagnostic data below to begin analysis'}
              {activeTab === 'dataset' && 'Explore comprehensive dataset information'}
              {activeTab === 'about' && 'Learn about our advanced AI technology'}
            </span>
            <div className="w-2 h-2 bg-white/50 rounded-full animate-ping delay-300"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </header>
  );
};

export default PageHeader;