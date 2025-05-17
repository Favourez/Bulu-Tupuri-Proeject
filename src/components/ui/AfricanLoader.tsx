import React from 'react';

interface AfricanLoaderProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  color?: 'amber' | 'brown' | 'black' | 'white';
  type?: 'mask' | 'spinner' | 'dots';
}

const AfricanLoader: React.FC<AfricanLoaderProps> = ({
  size = 'medium',
  text,
  color = 'amber',
  type = 'mask'
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const colorClasses = {
    amber: {
      primary: 'text-amber-600',
      secondary: 'text-amber-200',
      bg: 'bg-amber-600',
      border: 'border-amber-600',
      text: 'text-amber-800'
    },
    brown: {
      primary: 'text-brown-600',
      secondary: 'text-brown-200',
      bg: 'bg-brown-600',
      border: 'border-brown-600',
      text: 'text-brown-800'
    },
    black: {
      primary: 'text-black',
      secondary: 'text-gray-400',
      bg: 'bg-black',
      border: 'border-black',
      text: 'text-gray-800'
    },
    white: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      bg: 'bg-white',
      border: 'border-white',
      text: 'text-white'
    }
  };

  const renderLoader = () => {
    switch (type) {
      case 'mask':
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <div className={`absolute inset-0 rounded-full border-4 border-amber-200 opacity-25`}></div>
            <div className={`absolute inset-0 rounded-full border-4 border-t-amber-600 animate-spin`}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-1/2 h-1/2 ${colorClasses[color].primary}`}>
                <path
                  d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V9C17 10.1046 16.1046 11 15 11H9C7.89543 11 7 10.1046 7 9V5Z"
                  fill="currentColor"
                />
                <path
                  d="M5 13C5 11.8954 5.89543 11 7 11H17C18.1046 11 19 11.8954 19 13V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V13Z"
                  fill="currentColor"
                  fillOpacity="0.5"
                />
                <circle cx="12" cy="7" r="1" fill="currentColor" fillOpacity="0.3" />
                <circle cx="12" cy="16" r="2" fill="currentColor" fillOpacity="0.3" />
              </svg>
            </div>
          </div>
        );

      case 'spinner':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke={color === 'amber' ? '#F59E0B' : color === 'brown' ? '#795548' : color === 'black' ? '#000000' : '#FFFFFF'}
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill={color === 'amber' ? '#F59E0B' : color === 'brown' ? '#795548' : color === 'black' ? '#000000' : '#FFFFFF'}
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        );

      case 'dots':
        return (
          <div className={`flex space-x-2 ${sizeClasses[size]}`}>
            <div className={`w-2 h-2 rounded-full ${colorClasses[color].bg} animate-bounce`} style={{ animationDelay: '0ms' }}></div>
            <div className={`w-2 h-2 rounded-full ${colorClasses[color].bg} animate-bounce`} style={{ animationDelay: '150ms' }}></div>
            <div className={`w-2 h-2 rounded-full ${colorClasses[color].bg} animate-bounce`} style={{ animationDelay: '300ms' }}></div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {renderLoader()}
      {text && (
        <p className={`mt-3 font-medium text-sm ${colorClasses[color].text}`}>{text}</p>
      )}
    </div>
  );
};

export default AfricanLoader;
