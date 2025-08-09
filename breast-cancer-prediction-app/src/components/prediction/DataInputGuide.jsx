import React from 'react';
import { FileText, Info } from 'lucide-react';
import { getSampleData } from '../../data/featuresList';

/**
 * Data Input Guide Component
 * Provides instructions and sample data for users
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.showDataInfo - Whether to show detailed feature info
 * @param {Function} props.setShowDataInfo - Function to toggle feature info visibility
 * @returns {JSX.Element} Data input guide component
 */
const DataInputGuide = ({ showDataInfo, setShowDataInfo }) => {
  const sampleData = getSampleData();

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/50 rounded-2xl p-8 shadow-xl">
      {/* Decorative Icon */}
      <div className="absolute top-4 right-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
          <FileText className="h-8 w-8 text-white" />
        </div>
      </div>
      
      <div className="pr-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
          <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
          <span>Data Input Guide</span>
        </h3>
        
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          Enter diagnostic features from fine needle aspirate (FNA) analysis. Use comma-separated values for quick input or individual fields for detailed entry.
        </p>
        
        {/* Sample Data Display */}
        <div className="bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-xl p-6 mb-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CSV</span>
            </div>
            <p className="font-semibold text-gray-800">Sample Dataset (30 Features):</p>
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-4 shadow-inner">
            <code className="text-sm text-green-400 font-mono leading-relaxed break-all whitespace-pre-wrap block">
              {sampleData}
            </code>
          </div>
          
          <div className="mt-3 text-xs text-gray-600 space-y-1">
            <p>• Values represent measurements from cell nucleus analysis</p>
            <p>• Features include radius, texture, perimeter, area, smoothness, compactness, concavity, points, symmetry, and fractal dimension</p>
            <p>• Each measurement type has mean, standard error (SE), and worst values</p>
          </div>
        </div>
        
        {/* Toggle Button */}
        <button 
          onClick={() => setShowDataInfo(!showDataInfo)}
          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
            showDataInfo 
              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/25' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
          }`}
        >
          <Info className="h-5 w-5" />
          <span>{showDataInfo ? 'Hide Feature Details' : 'Show Feature Details'}</span>
        </button>
      </div>
    </div>
  );
};

export default DataInputGuide;