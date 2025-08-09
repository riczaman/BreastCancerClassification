/**
 * Wisconsin Breast Cancer Dataset Features
 * Complete list of 30 features with descriptions and categories
 */

export const featuresList = [
    // Mean Features (1-10)
    { 
      key: 'mean_radius', 
      label: 'Mean Radius', 
      description: 'Mean of distances from center to points on the perimeter', 
      category: 'mean',
      unit: 'pixels',
      importance: 'high'
    },
    { 
      key: 'mean_texture', 
      label: 'Mean Texture', 
      description: 'Standard deviation of gray-scale values', 
      category: 'mean',
      unit: 'unitless',
      importance: 'medium'
    },
    { 
      key: 'mean_perimeter', 
      label: 'Mean Perimeter', 
      description: 'Mean size of the core tumor', 
      category: 'mean',
      unit: 'pixels',
      importance: 'high'
    },
    { 
      key: 'mean_area', 
      label: 'Mean Area', 
      description: 'Mean area of the tumor', 
      category: 'mean',
      unit: 'pixels²',
      importance: 'high'
    },
    { 
      key: 'mean_smoothness', 
      label: 'Mean Smoothness', 
      description: 'Mean of local variation in radius lengths', 
      category: 'mean',
      unit: 'unitless',
      importance: 'medium'
    },
    { 
      key: 'mean_compactness', 
      label: 'Mean Compactness', 
      description: 'Mean of perimeter² / area - 1.0', 
      category: 'mean',
      unit: 'unitless',
      importance: 'high'
    },
    { 
      key: 'mean_concavity', 
      label: 'Mean Concavity', 
      description: 'Mean of severity of concave portions of the contour', 
      category: 'mean',
      unit: 'unitless',
      importance: 'high'
    },
    { 
      key: 'mean_concave_points', 
      label: 'Mean Concave Points', 
      description: 'Mean for number of concave portions of the contour', 
      category: 'mean',
      unit: 'count',
      importance: 'very_high'
    },
    { 
      key: 'mean_symmetry', 
      label: 'Mean Symmetry', 
      description: 'Mean symmetry of the cell nucleus', 
      category: 'mean',
      unit: 'unitless',
      importance: 'medium'
    },
    { 
      key: 'mean_fractal_dimension', 
      label: 'Mean Fractal Dimension', 
      description: 'Mean for "coastline approximation" - 1', 
      category: 'mean',
      unit: 'unitless',
      importance: 'low'
    },
  
    // Standard Error Features (11-20)
    { 
      key: 'se_radius', 
      label: 'SE Radius', 
      description: 'Standard error for the mean of distances from center to points on the perimeter', 
      category: 'se',
      unit: 'pixels',
      importance: 'medium'
    },
    { 
      key: 'se_texture', 
      label: 'SE Texture', 
      description: 'Standard error for standard deviation of gray-scale values', 
      category: 'se',
      unit: 'unitless',
      importance: 'low'
    },
    { 
      key: 'se_perimeter', 
      label: 'SE Perimeter', 
      description: 'Standard error for perimeter', 
      category: 'se',
      unit: 'pixels',
      importance: 'medium'
    },
    { 
      key: 'se_area', 
      label: 'SE Area', 
      description: 'Standard error for area', 
      category: 'se',
      unit: 'pixels²',
      importance: 'medium'
    },
    { 
      key: 'se_smoothness', 
      label: 'SE Smoothness', 
      description: 'Standard error for smoothness', 
      category: 'se',
      unit: 'unitless',
      importance: 'low'
    },
    { 
      key: 'se_compactness', 
      label: 'SE Compactness', 
      description: 'Standard error for compactness', 
      category: 'se',
      unit: 'unitless',
      importance: 'medium'
    },
    { 
      key: 'se_concavity', 
      label: 'SE Concavity', 
      description: 'Standard error for concavity', 
      category: 'se',
      unit: 'unitless',
      importance: 'medium'
    },
    { 
      key: 'se_concave_points', 
      label: 'SE Concave Points', 
      description: 'Standard error for concave points', 
      category: 'se',
      unit: 'count',
      importance: 'high'
    },
    { 
      key: 'se_symmetry', 
      label: 'SE Symmetry', 
      description: 'Standard error for symmetry', 
      category: 'se',
      unit: 'unitless',
      importance: 'low'
    },
    { 
      key: 'se_fractal_dimension', 
      label: 'SE Fractal Dimension', 
      description: 'Standard error for fractal dimension', 
      category: 'se',
      unit: 'unitless',
      importance: 'low'
    },
  
    // Worst Features (21-30)
    { 
      key: 'worst_radius', 
      label: 'Worst Radius', 
      description: 'Worst (largest) radius', 
      category: 'worst',
      unit: 'pixels',
      importance: 'very_high'
    },
    { 
      key: 'worst_texture', 
      label: 'Worst Texture', 
      description: 'Worst texture', 
      category: 'worst',
      unit: 'unitless',
      importance: 'medium'
    },
    { 
      key: 'worst_perimeter', 
      label: 'Worst Perimeter', 
      description: 'Worst perimeter', 
      category: 'worst',
      unit: 'pixels',
      importance: 'very_high'
    },
    { 
      key: 'worst_area', 
      label: 'Worst Area', 
      description: 'Worst area', 
      category: 'worst',
      unit: 'pixels²',
      importance: 'very_high'
    },
    { 
      key: 'worst_smoothness', 
      label: 'Worst Smoothness', 
      description: 'Worst smoothness', 
      category: 'worst',
      unit: 'unitless',
      importance: 'medium'
    },
    { 
      key: 'worst_compactness', 
      label: 'Worst Compactness', 
      description: 'Worst compactness', 
      category: 'worst',
      unit: 'unitless',
      importance: 'high'
    },
    { 
      key: 'worst_concavity', 
      label: 'Worst Concavity', 
      description: 'Worst concavity', 
      category: 'worst',
      unit: 'unitless',
      importance: 'high'
    },
    { 
      key: 'worst_concave_points', 
      label: 'Worst Concave Points', 
      description: 'Worst concave points', 
      category: 'worst',
      unit: 'count',
      importance: 'very_high'
    },
    { 
      key: 'worst_symmetry', 
      label: 'Worst Symmetry', 
      description: 'Worst symmetry', 
      category: 'worst',
      unit: 'unitless',
      importance: 'medium'
    },
    { 
      key: 'worst_fractal_dimension', 
      label: 'Worst Fractal Dimension', 
      description: 'Worst fractal dimension', 
      category: 'worst',
      unit: 'unitless',
      importance: 'low'
    }
  ];
  
  /**
   * Get features by category
   * @param {string} category - Feature category ('mean', 'se', 'worst')
   * @returns {Array} Filtered features array
   */
  export const getFeaturesByCategory = (category) => {
    return featuresList.filter(feature => feature.category === category);
  };
  
  /**
   * Get features by importance level
   * @param {string} importance - Importance level ('low', 'medium', 'high', 'very_high')
   * @returns {Array} Filtered features array
   */
  export const getFeaturesByImportance = (importance) => {
    return featuresList.filter(feature => feature.importance === importance);
  };
  
  /**
   * Get feature categories with colors
   * @returns {Object} Categories with styling information
   */
  export const getFeatureCategories = () => {
    return {
      mean: {
        name: 'Mean Features',
        description: 'Average values of cell nucleus measurements',
        color: 'blue',
        borderColor: 'border-blue-200',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-900',
        count: featuresList.filter(f => f.category === 'mean').length
      },
      se: {
        name: 'Standard Error Features',
        description: 'Standard error values indicating measurement variability',
        color: 'purple',
        borderColor: 'border-purple-200',
        bgColor: 'bg-purple-50',
        textColor: 'text-purple-900',
        count: featuresList.filter(f => f.category === 'se').length
      },
      worst: {
        name: 'Worst Features',
        description: 'Largest (worst) values found in the cell nucleus',
        color: 'red',
        borderColor: 'border-red-200',
        bgColor: 'bg-red-50',
        textColor: 'text-red-900',
        count: featuresList.filter(f => f.category === 'worst').length
      }
    };
  };
  
  /**
   * Sample data for testing
   * @returns {string} Comma-separated sample values
   */
  export const getSampleData = () => {
    return "13.54,14.36,87.46,566.3,0.09779,0.08129,0.06664,0.04781,0.1885,0.05766,0.2699,0.7886,2.058,23.56,0.008462,0.0146,0.02387,0.01315,0.0198,0.0023,15.11,19.26,99.7,711.2,0.144,0.1773,0.239,0.1288,0.2977,0.07259";
  };
  
  /**
   * Get feature by key
   * @param {string} key - Feature key
   * @returns {Object|null} Feature object or null if not found
   */
  export const getFeatureByKey = (key) => {
    return featuresList.find(feature => feature.key === key) || null;
  };