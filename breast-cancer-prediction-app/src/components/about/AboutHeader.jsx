import React from 'react';
import { Heart, Shield, Target, Zap, Brain, Activity } from 'lucide-react';
import AwarenessRibbon from '../common/AwarenessRibbon';

/**
 * About Header Component
 * Main content for the About page explaining the application and technology
 * 
 * @returns {JSX.Element} About header component
 */
const AboutHeader = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'State-of-the-art machine learning algorithms trained on medical data',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Precision Analysis',
      description: 'Analyzes 30 quantitative features from cell nucleus images',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Medical Grade Security',
      description: 'Privacy-focused design with local processing capabilities',
      color: 'green'
    },
    {
      icon: Activity,
      title: 'Real-time Results',
      description: 'Instant predictions with confidence intervals and risk assessment',
      color: 'red'
    }
  ];

  const methodology = [
    {
      step: '1',
      title: 'Data Collection',
      description: 'Fine needle aspirate (FNA) images are analyzed using computer vision',
      icon: '🔬'
    },
    {
      step: '2',
      title: 'Feature Extraction',
      description: '30 quantitative features are computed from cell nucleus characteristics',
      icon: '📊'
    },
    {
      step: '3',
      title: 'ML Processing',
      description: 'Logistic regression model with feature normalization processes the data',
      icon: '🧠'
    },
    {
      step: '4',
      title: 'Risk Assessment',
      description: 'Probabilistic predictions with confidence scores and risk categorization',
      icon: '📈'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main About Section */}
      <div className="medical-card p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <AwarenessRibbon size="w-12 h-12" className="floating-element" />
            <Heart className="h-12 w-12 text-pink-500 floating-element" style={{ animationDelay: '0.5s' }} />
            <Shield className="h-12 w-12 text-blue-500 floating-element" style={{ animationDelay: '1s' }} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About MedPredict AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advancing breast cancer detection through cutting-edge artificial intelligence and machine learning technology,
            while supporting breast cancer awareness and early detection initiatives.
          </p>
        </div>
        
        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-2xl p-8 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <AwarenessRibbon size="w-10 h-10" />
            <h3 className="text-2xl font-bold text-pink-900">Our Mission</h3>
          </div>
          <p className="text-pink-800 leading-relaxed text-lg">
            To democratize access to advanced breast cancer detection technology through AI-powered diagnostic assistance, 
            while promoting awareness, education, and the critical importance of early detection in saving lives.
          </p>
        </div>
        
        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 border border-${feature.color}-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-${feature.color}-500 rounded-xl flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className={`text-lg font-bold text-${feature.color}-900`}>
                    {feature.title}
                  </h4>
                </div>
                <p className={`text-${feature.color}-700 leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Methodology Section */}
      <div className="medical-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
          <Zap className="h-8 w-8 text-yellow-500" />
          <span>How It Works</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < methodology.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 z-10">
                <div className="text-center">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  {/* Step Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  {/* Step Content */}
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Details */}
      <div className="medical-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
          <Brain className="h-8 w-8 text-purple-500" />
          <span>Technology Stack</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Machine Learning */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">ML</span>
              </div>
              <span>Machine Learning</span>
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Algorithm:</strong> Logistic Regression with feature normalization</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Training Data:</strong> Wisconsin Breast Cancer Dataset (569 samples)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Features:</strong> 30 quantitative measurements from FNA images</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Performance:</strong> 94% accuracy with cross-validation</span>
              </li>
            </ul>
          </div>
          
          {/* Frontend Technology */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">UI</span>
              </div>
              <span>User Interface</span>
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Framework:</strong> React.js with modern hooks and components</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Styling:</strong> Tailwind CSS with advanced responsive design</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Visualization:</strong> Three.js for 3D cell rendering and animation</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Icons:</strong> Lucide React for consistent iconography</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Research & Development */}
      <div className="medical-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Research & Development</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-blue-900 mb-4">Ongoing Research Areas</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-semibold text-blue-800 mb-3">Model Enhancement</h5>
              <ul className="text-blue-700 space-y-2">
                <li>• Deep learning integration for improved accuracy</li>
                <li>• Ensemble methods combining multiple algorithms</li>
                <li>• Feature selection optimization</li>
                <li>• Real-time model updating capabilities</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-800 mb-3">User Experience</h5>
              <ul className="text-blue-700 space-y-2">
                <li>• Enhanced 3D visualization with WebGL</li>
                <li>• Mobile-optimized responsive design</li>
                <li>• Accessibility improvements for all users</li>
                <li>• Multi-language support implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;