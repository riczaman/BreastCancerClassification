import React from 'react';
import { featuresList, getFeatureCategories } from '../../data/featuresList';

/**
 * Individual Feature Input Component
 * Provides detailed input fields for each feature organized by category
 * 
 * @param {Object} props - Component props
 * @param {Object} props.features - Current feature values
 * @param {Function} props.onInputChange - Function to handle input changes
 * @returns {JSX.Element} Individual feature input component
 */
const IndividualFeatureInput = ({ features, onInputChange }) => {
  const categories = getFeatureCategories();

  /**
   * Get CSS classes for feature category styling
   * @param {string} category - Feature category
   * @returns {string} CSS classes
   */
  const getCategoryStyles = (category) => {
    const categoryInfo = categories[category];
    return `${categoryInfo.borderColor} ${categoryInfo.bgColor}`;
  };

  /**
   * Get header styles for category
   * @param {string} category - Feature category
   * @returns {string} CSS classes
   */
  const getCategoryHeaderStyles = (category) => {
    switch (category) {
      case 'mean':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'se':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'worst':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="medical-card p-8 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Individual Feature Input</h3>
      
      {/* Feature Categories */}
      {['mean', 'se', 'worst'].map(category => {
        const categoryInfo = categories[category];
        const categoryFeatures = featuresList.filter(f => f.category === category);
        
        return (
          <div key={category} className="mb-10">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h4 className={`text-lg font-bold px-4 py-2 rounded-lg border-2 ${getCategoryHeaderStyles(category)}`}>
                  {categoryInfo.name}
                </h4>
                <div className="text-sm text-gray-600">
                  {categoryFeatures.length} features
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {categoryFeatures.filter(f => features[f.key] && features[f.key] !== '').length}/{categoryFeatures.length} complete
                </span>
                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      category === 'mean' ? 'bg-blue-500' :
                      category === 'se' ? 'bg-purple-500' : 'bg-red-500'
                    }`}
                    style={{ 
                      width: `${(categoryFeatures.filter(f => features[f.key] && features[f.key] !== '').length / categoryFeatures.length) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Category Description */}
            <p className="text-sm text-gray-600 mb-4 italic">
              {categoryInfo.description}
            </p>
            
            {/* Feature Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryFeatures.map((feature) => {
                const hasValue = features[feature.key] && features[feature.key] !== '';
                
                return (
                  <div 
                    key={feature.key} 
                    className={`p-4 rounded-lg border-2 hover:shadow-md transition-all duration-200 ${
                      getCategoryStyles(category)
                    } ${hasValue ? 'ring-2 ring-green-300 ring-opacity-50' : ''}`}
                  >
                    {/* Feature Label */}
                    <label 
                      className="block text-sm font-semibold text-gray-700 mb-2 cursor-help" 
                      title={`${feature.description} (${feature.unit})`}
                    >
                      {feature.label}
                      {feature.importance === 'very_high' && (
                        <span className="ml-1 text-red-500 text-xs">★★</span>
                      )}
                      {feature.importance === 'high' && (
                        <span className="ml-1 text-orange-500 text-xs">★</span>
                      )}
                    </label>
                    
                    {/* Input Field */}
                    <input
                      type="number"
                      step="any"
                      value={features[feature.key] || ''}
                      onChange={(e) => onInputChange(feature.key, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm bg-white/80"
                      placeholder="0.000"
                    />
                    
                    {/* Feature Info */}
                    <div className="mt-2 text-xs text-gray-500 space-y-1">
                      <p>Unit: {feature.unit}</p>
                      {feature.importance === 'very_high' && (
                        <p className="text-red-600 font-medium">Critical feature</p>
                      )}
                      {feature.importance === 'high' && (
                        <p className="text-orange-600 font-medium">Important feature</p>
                      )}
                    </div>
                    
                    {/* Value Status */}
                    {hasValue && (
                      <div className="mt-2 flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">Value entered</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Category Summary */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {categoryInfo.name} completion:
                </span>
                <span className={`font-semibold ${
                  category === 'mean' ? 'text-blue-600' :
                  category === 'se' ? 'text-purple-600' : 'text-red-600'
                }`}>
                  {Math.round((categoryFeatures.filter(f => features[f.key] && features[f.key] !== '').length / categoryFeatures.length) * 100)}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Legend */}
      <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-slate-100 rounded-lg border">
        <h5 className="font-semibold text-gray-900 mb-2">Feature Importance Legend:</h5>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-1">
            <span className="text-red-500">★★</span>
            <span className="text-gray-700">Critical (Very High Importance)</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-orange-500">★</span>
            <span className="text-gray-700">Important (High Importance)</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-gray-400">○</span>
            <span className="text-gray-700">Standard (Medium/Low Importance)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualFeatureInput;