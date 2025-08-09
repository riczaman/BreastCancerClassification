import React from 'react';
import { Heart, AlertCircle, Shield, TrendingUp, Award } from 'lucide-react';

/**
 * Prediction Results Component
 * Displays ML model predictions with detailed metrics and visualizations
 * 
 * @param {Object} props - Component props
 * @param {Object} props.prediction - Prediction results from ML model
 * @param {Object} props.modelMetrics - Model performance metrics
 * @returns {JSX.Element} Prediction results component
 */
const PredictionResults = ({ prediction, modelMetrics }) => {
  if (!prediction) return null;

  // Handle error cases
  if (prediction.error) {
    return (
      <div className="medical-card p-6">
        <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center space-x-2">
          <AlertCircle className="h-6 w-6 text-red-600" />
          <span>Prediction Error</span>
        </h3>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{prediction.error}</p>
          <p className="text-sm text-red-600 mt-2">
            Please check your input data and try again.
          </p>
        </div>
      </div>
    );
  }

  const isMalignant = prediction.prediction === 'Malignant';
  const confidencePercentage = (prediction.confidence * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Main Prediction Card */}
      <div className="medical-card p-6 hover:shadow-2xl transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span>Prediction Results</span>
        </h3>
        
        {/* Main Prediction Display */}
        <div className={`relative p-6 rounded-xl border-2 shadow-lg transform transition-all duration-300 hover:scale-105 ${
          isMalignant 
            ? 'bg-gradient-to-br from-red-50 to-pink-100 border-red-300 shadow-red-500/20' 
            : 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-300 shadow-green-500/20'
        }`}>
          <div className="absolute top-4 right-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isMalignant ? 'bg-red-500' : 'bg-green-500'
            }`}>
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <div className="pr-16">
            <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Diagnosis Prediction
            </h4>
            <div className={`text-3xl font-bold mb-3 ${
              isMalignant ? 'text-red-900' : 'text-green-900'
            }`}>
              {prediction.prediction}
            </div>
            <p className={`text-sm font-semibold ${
              isMalignant ? 'text-red-800' : 'text-green-800'
            }`}>
              Confidence: {confidencePercentage}%
            </p>
            
            {/* Timestamp */}
            {prediction.timestamp && (
              <p className="text-xs text-gray-500 mt-2">
                Analyzed: {new Date(prediction.timestamp).toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* Detailed Probabilities */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 hover:bg-red-100 transition-colors">
            <div className="text-center">
              <div className="text-red-600 font-bold text-xl mb-1">
                {(prediction.malignantProbability * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-red-800 font-medium mb-2">Malignant Risk</div>
              <div className="w-full bg-red-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${prediction.malignantProbability * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 hover:bg-green-100 transition-colors">
            <div className="text-center">
              <div className="text-green-600 font-bold text-xl mb-1">
                {(prediction.benignProbability * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-green-800 font-medium mb-2">Benign Probability</div>
              <div className="w-full bg-green-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${prediction.benignProbability * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="mt-6 bg-gradient-to-r from-gray-50 to-slate-100 border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
            <Shield className="h-5 w-5 text-gray-600" />
            <span>Risk Assessment</span>
          </h4>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Risk Score:</span>
            <span className="font-bold text-gray-900 text-lg">{prediction.riskScore}/10</span>
          </div>
          
          <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className={`h-4 rounded-full transition-all duration-700 ${
                prediction.riskScore >= 7 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                prediction.riskScore >= 5 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 
                'bg-gradient-to-r from-green-500 to-green-600'
              }`}
              style={{ width: `${prediction.riskScore * 10}%` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full pointer-events-none"></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Low Risk</span>
            <span>Medium Risk</span>
            <span>High Risk</span>
          </div>
          
          <div className="mt-3 text-center">
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
              prediction.riskScore >= 7 ? 'bg-red-100 text-red-800' :
              prediction.riskScore >= 5 ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {prediction.riskScore >= 7 ? 'High Risk' : 
               prediction.riskScore >= 5 ? 'Medium Risk' : 'Low Risk'}
            </span>
          </div>
        </div>

        {/* Top Contributing Features */}
        {prediction.topFeatures && prediction.topFeatures.length > 0 && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span>Top Contributing Features</span>
            </h4>
            <div className="space-y-2">
              {prediction.topFeatures.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-white/50 p-2 rounded">
                  <span className="text-sm font-medium text-blue-800">
                    {item.feature.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  <span className="text-sm text-blue-600 font-mono">
                    {item.importance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Model Performance Metrics */}
      {modelMetrics && (
        <div className="medical-card p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Award className="h-5 w-5 text-yellow-600" />
            <span>Model Performance</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">
                {(modelMetrics.modelAccuracy * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-blue-800 font-medium">Accuracy</div>
            </div>
            
            <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">
                {(modelMetrics.precision * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-purple-800 font-medium">Precision</div>
            </div>
            
            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600">
                {(modelMetrics.recall * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-green-800 font-medium">Recall</div>
            </div>
            
            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-2xl font-bold text-orange-600">
                {(modelMetrics.f1Score * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-orange-800 font-medium">F1-Score</div>
            </div>
          </div>
          
          {/* Additional Metrics */}
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-600">Features Used:</span>
              <span className="font-bold text-gray-900 ml-2">
                {modelMetrics.featuresUsed}/{modelMetrics.totalFeatures}
              </span>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-600">Data Completeness:</span>
              <span className="font-bold text-gray-900 ml-2">
                {modelMetrics.completeness?.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictionResults;