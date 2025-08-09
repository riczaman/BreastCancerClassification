import React from 'react';
import { Upload } from 'lucide-react';
import { getSampleData } from '../../data/featuresList';

/**
 * Quick Data Input Component
 * Provides bulk CSV input functionality
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onBulkInput - Function to handle bulk input
 * @param {Function} props.onClearData - Function to clear input data
 * @returns {JSX.Element} Quick data input component
 */
const QuickDataInput = ({ onBulkInput, onClearData }) => {
  const sampleData = getSampleData();

  return (
    <div className="group medical-card p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Upload className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Quick Data Input</h3>
      </div>
      
      <div className="space-y-6">
        {/* CSV Input Area */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
            Paste CSV Data (30 Features):
          </label>
          <textarea
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 resize-none bg-gray-50/50 font-mono text-sm"
            rows="5"
            placeholder={`${sampleData.substring(0, 50)}...`}
            onChange={(e) => onBulkInput(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-2">
            Enter comma-separated values corresponding to the 30 Wisconsin dataset features
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onBulkInput(sampleData)}
            className="flex-1 min-w-48 px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-200 font-semibold transform hover:scale-105 shadow-lg shadow-emerald-500/25"
          >
            Load Sample Data
          </button>
          
          <button
            onClick={onClearData}
            className="px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-xl hover:from-gray-500 hover:to-gray-600 transition-all duration-200 font-semibold transform hover:scale-105 shadow-lg"
          >
            Clear Data
          </button>
        </div>
        
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Instructions:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Copy and paste 30 comma-separated numeric values</li>
            <li>• Values should be from fine needle aspirate (FNA) cell analysis</li>
            <li>• Use the sample data to test the prediction system</li>
            <li>• Ensure values are properly formatted (no missing commas)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickDataInput;