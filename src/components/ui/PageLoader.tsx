import React from 'react';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        <img 
          src="/icons/loading.svg" 
          alt="Loading" 
          className="w-full h-full" 
        />
      </div>
      <div className="mt-4 text-brown-600 font-medium">
        <div className="flex items-center">
          <span className="animate-pulse">Loading</span>
          <span className="ml-1 animate-bounce delay-100">.</span>
          <span className="ml-0.5 animate-bounce delay-200">.</span>
          <span className="ml-0.5 animate-bounce delay-300">.</span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
