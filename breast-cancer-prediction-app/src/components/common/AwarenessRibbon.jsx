import React from 'react';

/**
 * Breast Cancer Awareness Ribbon Component
 * Displays a pink ribbon SVG icon for breast cancer awareness
 * 
 * @param {Object} props - Component props
 * @param {string} props.size - Tailwind CSS size class (default: "w-8 h-8")
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} SVG awareness ribbon
 */
const AwarenessRibbon = ({ size = "w-8 h-8", className = "" }) => {
  return (
    <svg 
      className={`${size} text-pink-500 ${className}`} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      role="img"
      aria-label="Breast Cancer Awareness Ribbon"
    >
      {/* Main ribbon shape */}
      <path 
        d="M12 2L8.5 8.5L2 12L8.5 15.5L12 22L15.5 15.5L22 12L15.5 8.5L12 2Z" 
        className="drop-shadow-md" 
      />
      {/* Inner highlight */}
      <path 
        d="M12 6L10 10L6 12L10 14L12 18L14 14L18 12L14 10L12 6Z" 
        className="text-white opacity-80" 
      />
      {/* Center dot */}
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        className="text-pink-400"
      />
    </svg>
  );
};

export default AwarenessRibbon;