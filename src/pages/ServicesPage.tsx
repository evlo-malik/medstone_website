import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{
  title: string;
  image: string;
  imageAlt: string;
  link: string;
}> = ({ title, image, imageAlt, link }) => {
  return (
    <Link 
      to={link}
      className="group block"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl group-hover:-translate-y-1">
        <div className="h-[200px] overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
          <img 
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
          />
          {/* Decorative border */}
          <div className="absolute inset-[1px] border border-white/10 rounded-2xl pointer-events-none" />
        </div>
        <div className="relative">
          {/* Gradient overlay for smooth text transition */}
          <div className="absolute -top-20 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
          
          <div className="px-6 py-4">
            <h3 className="text-xl font-extralight text-[#444d42] tracking-wide relative">
              {title}
              <div className="absolute -bottom-2 left-0 w-12 h-[1px] bg-[#444d42]/20 group-hover:w-full transition-all duration-500" />
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Стоматология",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Dental services",
      link: "/services/dental"
    },
    {
      title: "Косметология",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Cosmetology services",
      link: "/services/cosmetology"
    },
    {
      title: "Диагностика",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Diagnostic services",
      link: "/services/diagnostic"
    },
    {
      title: "Лечение по ДМС",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Insurance services",
      link: "/services/insurance"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
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

      {/* Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 C25,50 75,50 100,0" stroke="#444d42" fill="none" strokeWidth="0.5" />
            <path d="M0,100 C25,50 75,50 100,100" stroke="#444d42" fill="none" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative">
        <h1 className="text-4xl md:text-5xl font-extralight text-[#444d42] mb-12 tracking-wide">
          Услуги
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 