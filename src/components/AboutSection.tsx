import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#444d42]/5">
      <div className="container mx-auto">
        <div className="relative z-10 bg-white rounded-2xl shadow-[0_20px_50px_rgba(68,77,66,0.15)] p-12 md:p-16 max-w-4xl mx-auto transform hover:-translate-y-1 transition-all duration-300">
          <div className="absolute -top-12 left-12 w-24 h-24 bg-[#444d42] rounded-2xl flex items-center justify-center shadow-lg">
            <h2 className="text-3xl font-light text-white tracking-wide">О нас</h2>
          </div>
          
          <div className="mt-8 md:mt-4">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-lg mx-auto md:mx-0">
                <img
                  src="https://evlo-malik.github.io/medstone/doctor.png"
                  alt="Modern clinic interior"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-3xl md:text-4xl font-light text-[#444d42] leading-tight mb-8">
                  Мы создаем пространство, где инновации встречаются с заботой
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#444d42]/5 flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 border-2 border-[#444d42] rounded-full" />
                    </div>
                    <p className="text-[#444d42]/70 font-light leading-relaxed">
                      Международная экспертиза и современные технологии лечения
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#444d42]/5 flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 border-2 border-[#444d42] rounded-full" />
                    </div>
                    <p className="text-[#444d42]/70 font-light leading-relaxed">
                      Инновационное оборудование экспертного класса
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#444d42]/5 flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 border-2 border-[#444d42] rounded-full" />
                    </div>
                    <p className="text-[#444d42]/70 font-light leading-relaxed">
                      Комфорт и безупречный результат для каждого пациента
                    </p>
                  </div>
                </div>
                
                <button className="group mt-12 inline-flex items-center gap-3 bg-[#444d42] text-white px-8 py-3 rounded-xl hover:bg-[#444d42]/90 transition-all">
                  <span className="text-sm font-light tracking-wide">Читать далее</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-8 right-8 w-32 h-32 bg-[#444d42]/5 rounded-full blur-2xl"></div>
        <div className="absolute -top-8 left-8 w-24 h-24 bg-[#444d42]/5 rounded-full blur-xl"></div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute left-0 top-0 w-full h-full opacity-[0.2] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://evlo-malik.github.io/medstone/pngwing.com.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;