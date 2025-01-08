import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-[#f5f5f5]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://evlo-malik.github.io/medstone/pngwing.com.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 C25,50 75,50 100,0" stroke="#444d42" fill="none" strokeWidth="0.5" />
            <path d="M0,100 C25,50 75,50 100,100" stroke="#444d42" fill="none" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      {/* Mobile Design */}
      <div className="md:hidden relative h-full flex flex-col">
        {/* Background Sections */}
        <div className="absolute inset-0">
          <div className="h-3/4 bg-[#f5f5f5]"></div>
          <div className="h-1/4 bg-[#444d42]/5">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("https://evlo-malik.github.io/medstone/pngwing.com.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        </div>

        {/* Marble Image */}
        <div className="absolute bottom-24 right-6 w-56 h-56 rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
          <img 
            src="https://evlo-malik.github.io/medstone/marble"
            alt="Marble texture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex items-start pt-32 relative z-10">
          <div className="w-full px-6">
            <h1 
              className="text-2xl tracking-wide font-extralight leading-relaxed text-[#444d42] opacity-0 translate-y-4"
              style={{
                animation: 'fadeIn 0.8s ease-out forwards',
                letterSpacing: '0.03em'
              }}
            >
              MEDSTONE – авторская стоматология и косметология, где передовые технологии и экспертный подход создают здоровье и красоту.
            </h1>
          </div>
        </div>
      </div>

      {/* Desktop Design */}
      <div className="hidden md:grid relative h-full grid-cols-12 gap-6">
        {/* Decorative Elements */}
        <div className="absolute top-12 left-12 opacity-20">
          <svg width="80" height="80" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#444d42" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="col-span-7 flex items-center px-12 relative">
          <div className="max-w-2xl">
            <h1 
              className="text-3xl xl:text-4xl tracking-wide font-extralight leading-relaxed text-[#444d42] opacity-0 translate-y-4"
              style={{
                animation: 'fadeIn 0.8s ease-out forwards',
                letterSpacing: '0.03em'
              }}
            >
              MEDSTONE – авторская стоматология и косметология, где передовые технологии и экспертный подход создают здоровье и красоту.
            </h1>
          </div>
        </div>

        <div className="col-span-5 relative bg-[#444d42]/5">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("https://evlo-malik.github.io/medstone/pngwing.com.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute top-1/3 right-12 w-48 h-48 rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://evlo-malik.github.io/medstone/marble"
              alt="Marble texture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;