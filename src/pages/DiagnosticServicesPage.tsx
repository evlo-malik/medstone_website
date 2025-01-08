import React from 'react';

const ServiceItem: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white transition-all duration-300">
    <h3 className="text-lg font-light text-[#444d42] tracking-wide">{title}</h3>
  </div>
);

const DiagnosticServicesPage: React.FC = () => {
  const services = [
    "Компьютерная томография",
    "Диагностическое сканирование челюсти"
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <div className="h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80"
            alt="Diagnostic services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extralight text-white tracking-wide mb-4">
              Диагностика
            </h1>
            <p className="text-xl text-white/90 font-light max-w-2xl">
              Современное оборудование и точные методы диагностики для вашего здоровья
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceItem key={index} title={service} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-24 bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-light text-[#444d42] mb-6 tracking-wide">
            Записаться на диагностику
          </h2>
          <p className="text-[#444d42]/70 font-light mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами для подбора удобного времени визита
          </p>
          <button className="bg-[#444d42] text-white px-8 py-3 rounded-xl hover:bg-[#444d42]/90 transition-all font-light">
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticServicesPage; 