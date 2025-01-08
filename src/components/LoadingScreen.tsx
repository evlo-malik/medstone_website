import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#e1d9ca] flex items-center justify-center z-50">
      <div className="relative">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img 
            src="https://evlo-malik.github.io/medstone/logo_text" 
            alt="MEDSTONE" 
            className="h-8 mx-auto"
          />
          <span className="block text-xs font-light tracking-wider mt-2 text-[#444d42]">
            СТОМАТОЛОГИЯ И КОСМЕТОЛОГИЯ
          </span>
        </div>
        
        {/* Loading Animation */}
        <div className="flex justify-center items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-[#444d42] rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;