/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'bounce-slow': 'bounce 2s infinite',
        },
        backdropBlur: {
          xs: '2px',
        },
        boxShadow: {
          '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
          'inner-lg': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.1)',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
    safelist: [
      // Dynamic classes for feature categories
      'border-blue-200',
      'bg-blue-50',
      'text-blue-900',
      'text-blue-600',
      'text-blue-700',
      'text-blue-800',
      'border-purple-200',
      'bg-purple-50',
      'text-purple-900',
      'text-purple-600',
      'text-purple-700',
      'text-purple-800',
      'border-red-200',
      'bg-red-50',
      'text-red-900',
      'text-red-600',
      'text-red-700',
      'text-red-800',
    ]
  }