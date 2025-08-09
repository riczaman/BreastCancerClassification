import React from 'react';
import { featuresList, getFeatureCategories } from '../../data/featuresList';

/**
 * Feature Categories Component
 * Displays features organized by their categories with detailed information
 * 
 * @returns {JSX.Element} Feature categories component
 */
const FeatureCategories = () => {
  const categories = getFeatureCategories();

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'mean': return '📊';
      case 'se': return '📈';
      case 'worst': return '🔴';
      default: return '📋';
    }
  };

  const getImportanceIcon = (importance) => {
    switch (importance) {
      case 'very_high': return '⭐⭐';
      case 'high': return '⭐';
      case 'medium': return '○';
      case 'low': return '○';
      default: return '○';
    }
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'very_high': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-blue-600';
      case 'low': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Overview */}
      <div className="medical-card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Feature Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(categories).map(([categoryKey, category]) => (
            <div key={categoryKey} className="bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{getCategoryIcon(categoryKey)}</span>
                <h3 className={`text-xl font-bold ${category.textColor}`}>
                  {category.name}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">
                  {category.count} Features
                </span>
                <div className={`w-8 h-8 ${category.bgColor} ${category.borderColor} border rounded-lg flex items-center justify-center`}>
                  <span className={`text-sm font-bold ${category.textColor}`}>
                    {category.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Feature Lists */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(categories).map(([categoryKey, category]) => {
          const categoryFeatures = featuresList.filter(f => f.category === categoryKey);
          
          return (
            <div key={categoryKey} className={`medical-card p-6 ${category.borderColor} border-2`}>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl">{getCategoryIcon(categoryKey)}</span>
                <h3 className={`text-xl font-bold ${category.textColor}`}>
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {categoryFeatures.map((feature, index) => (
                  <div 
                    key={feature.key} 
                    className={`p-4 ${category.bgColor} rounded-lg border ${category.borderColor} hover:shadow-md transition-all duration-200`}
                  >
                    {/* Feature Header */}
                    <div className="flex items-start justify-between mb-2">
                      <h4 className={`font-semibold ${category.textColor} text-sm flex-1`}>
                        {feature.label}
                      </h4>
                      <div className="flex items-center space-x-1 ml-2">
                        <span className={`text-xs ${getImportanceColor(feature.importance)}`}>
                          {getImportanceIcon(feature.importance)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Feature Description */}
                    <p className={`text-xs ${category.textColor.replace('900', '700')} mb-2 leading-relaxed`}>
                      {feature.description}
                    </p>
                    
                    {/* Feature Metadata */}
                    <div className="flex items-center justify-between text-xs">
                      <span className={`${category.textColor.replace('900', '600')} font-medium`}>
                        Unit: {feature.unit}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        feature.importance === 'very_high' ? 'bg-red-100 text-red-700' :
                        feature.importance === 'high' ? 'bg-orange-100 text-orange-700' :
                        feature.importance === 'medium' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {feature.importance.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Category Summary */}
              <div className={`mt-6 p-4 ${category.bgColor} rounded-lg border ${category.borderColor}`}>
                <h4 className={`font-semibold ${category.textColor} mb-2 text-sm`}>
                  Category Summary
                </h4>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className={category.textColor.replace('900', '700')}>Total Features:</span>
                    <span className={`font-bold ${category.textColor}`}>{categoryFeatures.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={category.textColor.replace('900', '700')}>Very High Importance:</span>
                    <span className={`font-bold ${category.textColor}`}>
                      {categoryFeatures.filter(f => f.importance === 'very_high').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={category.textColor.replace('900', '700')}>High Importance:</span>
                    <span className={`font-bold ${category.textColor}`}>
                      {categoryFeatures.filter(f => f.importance === 'high').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Importance Legend */}
      <div className="medical-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Feature Importance Guide</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              level: 'Very High',
              icon: '⭐⭐',
              color: 'red',
              description: 'Critical diagnostic features with highest predictive power',
              count: featuresList.filter(f => f.importance === 'very_high').length
            },
            {
              level: 'High',
              icon: '⭐',
              color: 'orange',
              description: 'Important features significantly contributing to diagnosis',
              count: featuresList.filter(f => f.importance === 'high').length
            },
            {
              level: 'Medium',
              icon: '○',
              color: 'blue',
              description: 'Moderate importance features providing additional context',
              count: featuresList.filter(f => f.importance === 'medium').length
            },
            {
              level: 'Low',
              icon: '○',
              color: 'gray',
              description: 'Supporting features with limited individual impact',
              count: featuresList.filter(f => f.importance === 'low').length
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`bg-${item.color}-50 border border-${item.color}-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h4 className={`font-bold text-${item.color}-900`}>
                  {item.level}
                </h4>
              </div>
              
              <p className={`text-sm text-${item.color}-700 mb-4 leading-relaxed`}>
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-xs text-${item.color}-600 font-medium`}>
                  Features:
                </span>
                <div className={`w-8 h-8 bg-${item.color}-500 rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">
                    {item.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Usage Guidelines */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-blue-900 mb-4">Feature Usage Guidelines</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-semibold text-blue-800 mb-2">For Accurate Predictions:</h5>
              <ul className="text-blue-700 space-y-1">
                <li>• Include all ⭐⭐ (very high) importance features</li>
                <li>• Add as many ⭐ (high) importance features as possible</li>
                <li>• Minimum 10-15 features recommended for reliable results</li>
                <li>• Complete feature sets (all 30) provide best accuracy</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-800 mb-2">Feature Relationships:</h5>
              <ul className="text-blue-700 space-y-1">
                <li>• Mean features provide baseline measurements</li>
                <li>• SE features indicate measurement variability</li>
                <li>• Worst features capture extreme characteristics</li>
                <li>• Combined analysis improves diagnostic accuracy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCategories;