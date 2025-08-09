import React from 'react';
import { Database, ExternalLink, BarChart3, Users, Target } from 'lucide-react';

/**
 * Dataset Overview Component
 * Provides comprehensive information about the Wisconsin Breast Cancer Dataset
 * 
 * @returns {JSX.Element} Dataset overview component
 */
const DatasetOverview = () => {
  const datasetStats = [
    { label: 'Numeric Features', value: '30', color: 'blue', icon: BarChart3 },
    { label: 'Target Classes', value: '2', color: 'purple', icon: Target },
    { label: 'Total Samples', value: '569', color: 'green', icon: Users },
    { label: 'Model Accuracy', value: '94%', color: 'rose', icon: Database }
  ];

  const datasetInfo = [
    {
      title: 'Data Source',
      content: 'Fine needle aspirate (FNA) of breast mass digital images',
      icon: '🔬'
    },
    {
      title: 'Feature Types',
      content: 'Quantitative measurements of cell nucleus characteristics',
      icon: '📊'
    },
    {
      title: 'Classification',
      content: 'Binary classification: Malignant (M) or Benign (B)',
      icon: '⚕️'
    },
    {
      title: 'Research Use',
      content: 'Industry standard for breast cancer ML research',
      icon: '🎓'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Overview Card */}
      <div className="medical-card p-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <Database className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Wisconsin Breast Cancer Dataset</h2>
            <p className="text-gray-600">Industry standard for breast cancer machine learning research</p>
          </div>
        </div>
        
        {/* Dataset Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {datasetStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border border-${stat.color}-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <div className={`w-12 h-12 bg-${stat.color}-500 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-semibold text-${stat.color}-800`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Dataset Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {datasetInfo.map((info, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{info.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
              </div>
              <p className="text-gray-700">{info.content}</p>
            </div>
          ))}
        </div>
        
        {/* External Dataset Link */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>Access External Dataset</span>
          </h4>
          <p className="text-sm text-blue-800 mb-4">
            View the complete dataset with all samples and detailed feature information from our Google Drive repository:
          </p>
          <a 
            href="https://drive.google.com/file/d/1wDjDuqDPAJd1cQEICcu19J9vrjFAWJ1H/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Open Dataset (Google Drive)</span>
          </a>
        </div>
      </div>

      {/* Technical Details */}
      <div className="medical-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature Methodology */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">1</span>
              </span>
              <span>Feature Extraction</span>
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              <p>• Digital image analysis of fine needle aspirate samples</p>
              <p>• Computer vision algorithms identify cell nucleus boundaries</p>
              <p>• Quantitative measurements extracted from nucleus characteristics</p>
              <p>• Statistical analysis provides mean, SE, and worst values</p>
            </div>
          </div>
          
          {/* Model Training */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">2</span>
              </span>
              <span>Model Training</span>
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              <p>• Logistic regression with feature normalization</p>
              <p>• Cross-validation for robust performance estimation</p>
              <p>• Feature importance analysis for interpretability</p>
              <p>• Comprehensive evaluation metrics and validation</p>
            </div>
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <h4 className="font-bold text-green-900 mb-4 flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Model Performance Metrics</span>
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: 'Accuracy', value: '94.0%', description: 'Overall correct predictions' },
              { metric: 'Precision', value: '91.0%', description: 'True positives / (True positives + False positives)' },
              { metric: 'Recall', value: '89.0%', description: 'True positives / (True positives + False negatives)' },
              { metric: 'F1-Score', value: '90.0%', description: 'Harmonic mean of precision and recall' }
            ].map((item, index) => (
              <div key={index} className="bg-white/70 p-4 rounded-lg border border-green-300">
                <div className="text-xl font-bold text-green-600 mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-green-800 mb-2">{item.metric}</div>
                <div className="text-xs text-green-700">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Citations */}
      <div className="medical-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Research & Citations</h3>
        
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Original Research</h4>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Title:</strong> Nuclear feature extraction for breast tumor diagnosis</p>
            <p><strong>Authors:</strong> W.N. Street, W.H. Wolberg, O.L. Mangasarian</p>
            <p><strong>Institution:</strong> University of Wisconsin, Madison</p>
            <p><strong>Repository:</strong> UCI Machine Learning Repository</p>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This dataset has been widely used in machine learning research and education, 
              serving as a benchmark for binary classification algorithms in medical diagnosis applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetOverview;