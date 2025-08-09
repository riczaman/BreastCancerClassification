import React from 'react';
import { Activity, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * Input Summary Component
 * Displays progress and summary of entered features
 * 
 * @param {Object} props - Component props
 * @param {Object} props.features - Current feature values
 * @returns {JSX.Element} Input summary component
 */
const InputSummary = ({ features }) => {
  const totalFeatures = 30;
  const enteredFeatures = Object.keys(features).length;
  const completionPercentage = (enteredFeatures / totalFeatures) * 100;
  
  // Calculate category-wise completion
  const meanFeatures = Object.keys(features).filter(key => key.startsWith('mean_')).length;
  const seFeatures = Object.keys(features).filter(key => key.startsWith('se_')).length;
  const worstFeatures = Object.keys(features).filter(key => key.startsWith('worst_')).length;

  const getCompletionStatus = () => {
    if (enteredFeatures === 0) return { status: 'empty', color: 'gray', message: 'No data entered' };
    if (enteredFeatures < 10) return { status: 'low', color: 'red', message: 'Insufficient data' };
    if (enteredFeatures < 20) return { status: 'medium', color: 'yellow', message: 'Partial data' };
    if (enteredFeatures < 30) return { status: 'high', color: 'blue', message: 'Good data coverage' };
    return { status: 'complete', color: 'green', message: 'All features complete!' };
  };

  const { status, color, message } = getCompletionStatus();

  return (
    <div className="medical-card p-6 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center">
          <Activity className="h-5 w-5 text-white" />
        </div>
        <span>Input Summary</span>
      </h3>
      
      {/* Main Progress */}
      <div className="space-y-4">
        {/* Overall Progress */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700">Features Entered:</span>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              {enteredFeatures}
            </span>
            <span className="text-lg text-gray-500">/ {totalFeatures}</span>
            {status === 'complete' && <CheckCircle className="h-5 w-5 text-green-500" />}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
            <div 
              className={`h-4 rounded-full transition-all duration-700 ease-out shadow-lg ${
                color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                'bg-gradient-to-r from-gray-400 to-gray-500'
              }`}
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full pointer-events-none"></div>
        </div>
        
        {/* Status Message */}
        <div className="text-center">
          <p className={`text-sm font-medium flex items-center justify-center space-x-2 ${
            color === 'green' ? 'text-green-600' :
            color === 'blue' ? 'text-blue-600' :
            color === 'yellow' ? 'text-yellow-600' :
            color === 'red' ? 'text-red-600' :
            'text-gray-600'
          }`}>
            {status === 'complete' && <CheckCircle className="h-4 w-4" />}
            {status === 'low' && <AlertCircle className="h-4 w-4" />}
            <span>{message}</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {completionPercentage.toFixed(1)}% complete
          </p>
        </div>
      </div>
      
      {/* Category Breakdown */}
      <div className="mt-6 space-y-3">
        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Category Breakdown:
        </h4>
        
        <div className="grid grid-cols-3 gap-3">
          {/* Mean Features */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-blue-600">{meanFeatures}</div>
            <div className="text-xs text-blue-800 font-medium">Mean Features</div>
            <div className="text-xs text-blue-600">{meanFeatures}/10</div>
          </div>
          
          {/* SE Features */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-purple-600">{seFeatures}</div>
            <div className="text-xs text-purple-800 font-medium">SE Features</div>
            <div className="text-xs text-purple-600">{seFeatures}/10</div>
          </div>
          
          {/* Worst Features */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-red-600">{worstFeatures}</div>
            <div className="text-xs text-red-800 font-medium">Worst Features</div>
            <div className="text-xs text-red-600">{worstFeatures}/10</div>
          </div>
        </div>
      </div>
      
      {/* Prediction Readiness */}
      <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-slate-100 rounded-lg border">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Prediction Readiness:</span>
          <div className="flex items-center space-x-2">
            {enteredFeatures > 0 ? (
              <>
                <div className={`w-3 h-3 rounded-full ${
                  enteredFeatures >= 10 ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
                <span className={`text-sm font-semibold ${
                  enteredFeatures >= 10 ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {enteredFeatures >= 10 ? 'Ready' : 'Minimal Data'}
                </span>
              </>
            ) : (
              <>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <span className="text-sm font-semibold text-gray-600">Not Ready</span>
              </>
            )}
          </div>
        </div>
        
        {enteredFeatures > 0 && enteredFeatures < 10 && (
          <p className="text-xs text-yellow-600 mt-2">
            More features recommended for accurate predictions
          </p>
        )}
      </div>
    </div>
  );
};

export default InputSummary;