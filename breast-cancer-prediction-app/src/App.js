import React, { useState } from 'react';
import Navigation from './components/common/Navigation';
import PageHeader from './components/common/PageHeader';
import AwarenessRibbon from './components/common/AwarenessRibbon';

// Prediction components
import CellVisualization from './components/prediction/CellVisualization';
import DataInputGuide from './components/prediction/DataInputGuide';
import QuickDataInput from './components/prediction/QuickDataInput';
import IndividualFeatureInput from './components/prediction/IndividualFeatureInput';
import InputSummary from './components/prediction/InputSummary';
import PredictionResults from './components/prediction/PredictionResults';

// Dataset components
import DatasetOverview from './components/dataset/DatasetOverview';
import FeatureCategories from './components/dataset/FeatureCategories';

// About components
import AboutHeader from './components/about/AboutHeader';
import MedicalNotice from './components/about/MedicalNotice';

// Models and data
import { BreastCancerModel } from './models/BreastCancerModel';
import { featuresList } from './data/featuresList';

/**
 * Main Application Component
 * Manages the overall state and routing for the breast cancer prediction app
 */
function App() {
  // State management
  const [features, setFeatures] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDataInfo, setShowDataInfo] = useState(false);
  const [activeTab, setActiveTab] = useState('prediction');
  const [modelMetrics, setModelMetrics] = useState(null);

  /**
   * Handle input change for individual features
   * @param {string} key - Feature key
   * @param {string} value - Feature value
   */
  const handleInputChange = (key, value) => {
    setFeatures(prev => ({
      ...prev,
      [key]: value
    }));
  };

  /**
   * Handle bulk CSV input
   * @param {string} csvData - Comma-separated values
   */
  const handleBulkInput = (csvData) => {
    const values = csvData.split(',').map(val => val.trim());
    const newFeatures = {};
    
    featuresList.forEach((feature, index) => {
      if (values[index] && values[index] !== '') {
        newFeatures[feature.key] = values[index];
      }
    });
    
    setFeatures(newFeatures);
  };

  /**
   * Handle ML prediction
   */
  const handlePredict = async () => {
    setLoading(true);
    
    try {
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Validate features
      const validation = BreastCancerModel.validateFeatures(features);
      if (!validation.isValid) {
        throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
      }
      
      // Use actual ML model for prediction
      const result = BreastCancerModel.predict(features);
      
      if (result.error) {
        throw new Error(result.error);
      }
      
      setPrediction(result);
      
      // Set model performance metrics
      const modelInfo = BreastCancerModel.getModelInfo();
      setModelMetrics({
        featuresUsed: result.featuresUsed,
        totalFeatures: result.totalFeatures,
        modelAccuracy: modelInfo.accuracy,
        precision: modelInfo.precision,
        recall: modelInfo.recall,
        f1Score: modelInfo.f1Score,
        completeness: (result.featuresUsed / 30) * 100
      });
      
    } catch (error) {
      console.error('Prediction error:', error);
      setPrediction({
        prediction: 'Error',
        error: error.message,
        malignantProbability: 0,
        benignProbability: 0,
        confidence: 0,
        riskScore: 0
      });
    } finally {
      setLoading(false);
    }
  };

  /**
   * Reset form and predictions
   */
  const resetForm = () => {
    setFeatures({});
    setPrediction(null);
    setModelMetrics(null);
  };

  /**
   * Clear only the input data
   */
  const clearData = () => {
    setFeatures({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      {/* Floating Awareness Elements */}
      <div className="fixed top-20 right-6 z-40 floating-element">
        <AwarenessRibbon size="w-12 h-12" />
      </div>
      <div className="fixed bottom-20 left-6 z-40 floating-element" style={{ animationDelay: '1s' }}>
        <AwarenessRibbon size="w-8 h-8" />
      </div>

      {/* Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Page Header */}
      <PageHeader activeTab={activeTab} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Prediction Tab */}
        {activeTab === 'prediction' && (
          <div className="space-y-8">
            {/* Data Input Guide */}
            <DataInputGuide 
              showDataInfo={showDataInfo} 
              setShowDataInfo={setShowDataInfo} 
            />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Input Section */}
              <div className="xl:col-span-2 space-y-8">
                {/* Quick Data Input */}
                <QuickDataInput 
                  onBulkInput={handleBulkInput}
                  onClearData={clearData}
                />

                {/* Individual Feature Inputs */}
                {showDataInfo && (
                  <IndividualFeatureInput 
                    features={features}
                    onInputChange={handleInputChange}
                  />
                )}

                {/* Action Buttons */}
                <div className="flex space-x-6">
                  <button
                    onClick={handlePredict}
                    disabled={loading || Object.keys(features).length === 0}
                    className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 disabled:from-gray-300 disabled:via-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 font-bold flex items-center justify-center space-x-3 shadow-2xl shadow-blue-500/25 transform hover:scale-105 disabled:transform-none text-lg"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Predict Cancer Type</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-bold shadow-lg transform hover:scale-105"
                  >
                    Reset Form
                  </button>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-8">
                {/* 3D Cell Visualization */}
                <CellVisualization prediction={prediction} isAnimating={loading} />

                {/* Input Summary */}
                <InputSummary features={features} />

                {/* Prediction Results */}
                {prediction && (
                  <PredictionResults prediction={prediction} modelMetrics={modelMetrics} />
                )}

                {/* Medical Disclaimer */}
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div className="pr-4">
                      <h4 className="font-bold text-yellow-900 mb-3">Medical Disclaimer</h4>
                      <p className="text-sm text-yellow-800 leading-relaxed">
                        This AI tool is designed for educational and research purposes only. It should never replace professional medical consultation, diagnosis, or treatment decisions. Always consult qualified healthcare professionals for medical advice and never delay seeking medical care based on these results.
                      </p>
                    </div>
                    <AwarenessRibbon size="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dataset Tab */}
        {activeTab === 'dataset' && (
          <div className="space-y-8">
            <DatasetOverview />
            <FeatureCategories />
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="space-y-8">
            <AboutHeader />
            <MedicalNotice />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;