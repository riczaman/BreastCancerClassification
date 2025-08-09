import React from 'react';
import { AlertTriangle, Heart, Phone, Calendar, Users } from 'lucide-react';
import AwarenessRibbon from '../common/AwarenessRibbon';

/**
 * Medical Notice Component
 * Important medical disclaimers, awareness information, and resources
 * 
 * @returns {JSX.Element} Medical notice component
 */
const MedicalNotice = () => {
  const emergencyContacts = [
    {
      title: 'American Cancer Society',
      phone: '1-800-227-2345',
      description: '24/7 cancer information and support',
      website: 'cancer.org'
    },
    {
      title: 'National Cancer Institute',
      phone: '1-800-422-6237',
      description: 'Cancer information service',
      website: 'cancer.gov'
    },
    {
      title: 'Susan G. Komen',
      phone: '1-877-465-6636',
      description: 'Breast cancer support and resources',
      website: 'komen.org'
    }
  ];

  const awarenessStats = [
    {
      stat: '1 in 8',
      description: 'Women will develop breast cancer in their lifetime',
      icon: Users
    },
    {
      stat: '99%',
      description: '5-year survival rate when caught early',
      icon: Heart
    },
    {
      stat: '40+',
      description: 'Recommended age to begin annual mammograms',
      icon: Calendar
    }
  ];

  return (
    <div className="space-y-8">
      {/* Critical Medical Disclaimer */}
      <div className="relative bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 border-2 border-red-200 rounded-2xl p-8 shadow-xl">
        <div className="absolute top-6 right-6">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
        </div>
        
        <div className="pr-16">
          <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center space-x-3">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <span>⚠️ Critical Medical Notice</span>
          </h3>
          
          <div className="space-y-4 text-red-800 leading-relaxed">
            <div className="bg-white/50 p-6 rounded-lg border border-red-300">
              <h4 className="font-bold text-red-900 mb-3 text-lg">Educational Purpose Only</h4>
              <p className="mb-4">
                <strong>This application is designed exclusively for educational and research purposes.</strong> 
                It demonstrates machine learning applications in medical diagnosis but should <em>never</em> be used 
                for actual medical decision-making, diagnosis, or treatment planning.
              </p>
            </div>
            
            <div className="bg-white/50 p-6 rounded-lg border border-red-300">
              <h4 className="font-bold text-red-900 mb-3 text-lg">No Medical Advice</h4>
              <p className="mb-4">
                The predictions provided by this AI system are <strong>not medical advice</strong> and should not 
                influence any healthcare decisions. Only qualified medical professionals can provide accurate 
                diagnosis, treatment recommendations, and medical care.
              </p>
            </div>
            
            <div className="bg-white/50 p-6 rounded-lg border border-red-300">
              <h4 className="font-bold text-red-900 mb-3 text-lg">Seek Professional Care</h4>
              <p className="mb-4">
                Always consult qualified healthcare professionals for medical advice, diagnosis, and treatment. 
                <strong>Never delay seeking medical care</strong> based on information or predictions from this application. 
                Early detection through proper medical screening saves lives.
              </p>
            </div>
            
            <div className="flex items-center space-x-3 mt-6 p-4 bg-pink-100/70 rounded-lg border border-pink-300">
              <AwarenessRibbon size="w-8 h-8" />
              <div>
                <p className="font-bold text-pink-900 text-lg">Supporting Breast Cancer Awareness</p>
                <p className="text-pink-800">This project supports breast cancer research and awareness initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breast Cancer Awareness Statistics */}
      <div className="medical-card p-8">
        <div className="flex items-center space-x-4 mb-8">
          <AwarenessRibbon size="w-10 h-10" />
          <h3 className="text-2xl font-bold text-gray-900">Breast Cancer Awareness</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {awarenessStats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-pink-600 mb-2">{item.stat}</div>
                <div className="text-sm text-pink-800 font-medium leading-relaxed">{item.description}</div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-6">
          <h4 className="font-bold text-pink-900 mb-4 flex items-center space-x-2">
            <Heart className="h-5 w-5" />
            <span>Early Detection Saves Lives</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-semibold text-pink-800 mb-3">Screening Recommendations:</h5>
              <ul className="text-pink-700 space-y-2">
                <li>• Annual mammograms starting at age 40-50</li>
                <li>• Monthly self-examinations for all women</li>
                <li>• Clinical breast exams by healthcare providers</li>
                <li>• Genetic counseling for high-risk individuals</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-pink-800 mb-3">Warning Signs to Watch:</h5>
              <ul className="text-pink-700 space-y-2">
                <li>• New lumps or thickening in breast or underarm</li>
                <li>• Changes in breast size or shape</li>
                <li>• Skin dimpling, puckering, or redness</li>
                <li>• Nipple discharge or inversion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contacts and Resources */}
      <div className="medical-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
          <Phone className="h-8 w-8 text-blue-500" />
          <span>Emergency Contacts & Resources</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-blue-900">{contact.title}</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white/70 p-3 rounded-lg border border-blue-300">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{contact.phone}</div>
                  <div className="text-sm text-blue-800">{contact.description}</div>
                </div>
                
                <div className="text-xs text-blue-700">
                  Website: <span className="font-semibold">{contact.website}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Resources */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <h4 className="font-bold text-green-900 mb-4">Additional Resources</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-semibold text-green-800 mb-3">Support Organizations:</h5>
              <ul className="text-green-700 space-y-1">
                <li>• Breastcancer.org - Comprehensive information and support</li>
                <li>• Young Survival Coalition - Support for young women</li>
                <li>• Living Beyond Breast Cancer - Survivorship resources</li>
                <li>• Metastatic Breast Cancer Network - Advanced stage support</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-green-800 mb-3">Emergency Actions:</h5>
              <ul className="text-green-700 space-y-1">
                <li>• If you find a lump, see a doctor immediately</li>
                <li>• Don't panic - most lumps are not cancerous</li>
                <li>• Keep records of all medical appointments</li>
                <li>• Bring a support person to medical visits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legal and Ethical Considerations */}
      <div className="medical-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Legal and Ethical Considerations</h3>
        
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Privacy and Data Security</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• All data processing occurs locally in your browser</li>
              <li>• No personal health information is stored or transmitted</li>
              <li>• Input data is not saved after closing the application</li>
              <li>• No cookies or tracking technologies are used for health data</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Limitations and Accuracy</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• AI predictions are based on limited training data</li>
              <li>• Model accuracy may vary with different populations</li>
              <li>• Results should never replace professional medical testing</li>
              <li>• Individual results may not reflect population statistics</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Ethical AI Use</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• This tool promotes education and awareness, not diagnosis</li>
              <li>• AI should supplement, never replace, human medical judgment</li>
              <li>• Technology should reduce healthcare disparities, not increase them</li>
              <li>• Open science principles guide our development approach</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="relative bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 border-2 border-pink-300 rounded-2xl p-8 shadow-lg">
        <div className="absolute top-6 right-6">
          <AwarenessRibbon size="w-12 h-12" className="animate-pulse" />
        </div>
        
        <div className="pr-16">
          <h3 className="text-2xl font-bold text-pink-900 mb-4 flex items-center space-x-3">
            <Heart className="h-8 w-8 text-pink-600" />
            <span>Take Action Today</span>
          </h3>
          
          <div className="text-pink-800 space-y-4">
            <p className="text-lg leading-relaxed">
              <strong>Early detection is the most powerful weapon against breast cancer.</strong> 
              Schedule your screening appointments, perform regular self-examinations, and stay informed 
              about your breast health.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/70 p-4 rounded-lg border border-pink-300 text-center">
                <Calendar className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                <div className="font-bold text-pink-900">Schedule</div>
                <div className="text-sm text-pink-700">Regular mammograms</div>
              </div>
              
              <div className="bg-white/70 p-4 rounded-lg border border-pink-300 text-center">
                <Users className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                <div className="font-bold text-pink-900">Share</div>
                <div className="text-sm text-pink-700">Awareness with others</div>
              </div>
              
              <div className="bg-white/70 p-4 rounded-lg border border-pink-300 text-center">
                <Heart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                <div className="font-bold text-pink-900">Support</div>
                <div className="text-sm text-pink-700">Research initiatives</div>
              </div>
            </div>
            
            <p className="text-center font-semibold text-pink-900 text-lg mt-6">
              Together, we can make a difference in the fight against breast cancer. 💪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalNotice;