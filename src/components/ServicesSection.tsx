import React from 'react';
import { ArrowRight, Stethoscope, Syringe, FileText, Search } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div 
    className="group relative bg-white/95 backdrop-blur-sm p-8 transition-all hover:bg-white cursor-pointer border-b border-[#444d42]/10 last:border-b-0 hover:shadow-lg h-full flex flex-col"
    style={{
      backgroundImage: `url("data:image/png;base64,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")`,
      backgroundBlendMode: 'overlay',
      backgroundSize: '200px 200px'
    }}
  >
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8 bg-[#e1d9ca]/40 p-4 rounded-xl">
        <div className="p-2 rounded-xl transition-all text-[#444d42]">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-light tracking-wider text-[#444d42] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-current after:opacity-30">{title}</h3>
      </div>
      <div className="space-y-4 mb-8 bg-white/80 p-4 rounded-xl flex-grow">
        {description.split(', ').map((item, index) => (
          <p key={index} className="text-[#444d42]/80 leading-relaxed font-light text-sm md:text-base flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-current before:opacity-30">
            {item}
          </p>
        ))}
      </div>
      <div className="flex justify-end group-hover:translate-x-1 transition-all duration-300">
        <ArrowRight className="w-5 h-5 text-[#444d42] transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://evlo-malik.github.io/medstone/background1")',
            backgroundPosition: '75% center',
            backgroundSize: 'cover'
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      </div>
      
      <div className="container mx-auto relative">
        <h2 className="relative z-10 text-3xl md:text-4xl font-light text-white mb-12">
          Услуги
        </h2>
        <div className="relative z-10 md:bg-white/80 md:backdrop-blur-sm md:rounded-2xl md:overflow-hidden md:shadow-xl md:max-w-xl">
          {/* Mobile Scrollable Container */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="flex">
              {[
                {
                  icon: <Stethoscope size={32} />,
                  title: "СТОМАТОЛОГИЯ",
                  description: "Современные методики лечения, профессиональная гигиена, эстетическая реставрация и протезирование."
                },
                {
                  icon: <Syringe size={32} />,
                  title: "КОСМЕТОЛОГИЯ",
                  description: "Инъекционные процедуры, уходовые программы, аппаратная косметология и anti-age терапия."
                },
                {
                  icon: <FileText size={32} />,
                  title: "ЛЕЧЕНИЕ ПО ДМС",
                  description: "Полный спектр услуг по программам добровольного медицинского страхования."
                },
                {
                  icon: <Search size={32} />,
                  title: "ДИАГНОСТИКА",
                  description: "Современное диагностическое оборудование для точного определения состояния здоровья."
                }
              ].map((service, index) => (
                <div key={index} className="w-[85vw] max-w-[360px] min-w-[300px] flex-shrink-0 snap-start">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Vertical Layout */}
          <div className="hidden md:block">
            <ServiceCard
              icon={<Stethoscope size={32} />}
              title="СТОМАТОЛОГИЯ"
              description="Современные методики лечения, профессиональная гигиена, эстетическая реставрация и протезирование."
            />
            <ServiceCard
              icon={<Syringe size={32} />}
              title="КОСМЕТОЛОГИЯ"
              description="Инъекционные процедуры, уходовые программы, аппаратная косметология и anti-age терапия."
            />
            <ServiceCard
              icon={<FileText size={32} />}
              title="ЛЕЧЕНИЕ ПО ДМС"
              description="Полный спектр услуг по программам добровольного медицинского страхования."
            />
            <ServiceCard
              icon={<Search size={32} />}
              title="ДИАГНОСТИКА"
              description="Современное диагностическое оборудование для точного определения состояния здоровья."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;