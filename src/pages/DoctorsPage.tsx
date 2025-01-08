import React from 'react';
import { User, Stethoscope, Heart, Award, Calendar } from 'lucide-react';

interface Doctor {
  name: string;
  position: string;
  type: 'dentist' | 'cosmetologist';
  image?: string;
}

const DoctorsPage: React.FC = () => {
  const doctors: Doctor[] = [
    {
      name: 'Толдиева Илиза Тембулатовна',
      position: 'главный врач, стоматолог - ортодонт',
      type: 'dentist',
      image: '/images/doctors/toldieva.png'
    },
    {
      name: 'Додова Заира Иссаевна',
      position: 'стоматолог - ортопед',
      type: 'dentist'
    },
    {
      name: 'Братов Инал Мухамедович',
      position: 'стоматолог - терапевт, стоматолог - ортопед',
      type: 'dentist'
    },
    {
      name: 'Колесников Дмитрий Сергеевич',
      position: 'стоматолог хирург - ортопед',
      type: 'dentist'
    },
    {
      name: 'Володина Нина Николаевна',
      position: 'стоматолог - терапевт (детский), стоматолог - ортодонт',
      type: 'dentist'
    },
    {
      name: 'Карпова Анастасия Александровна',
      position: 'врач-стоматолог (детский терапевт)',
      type: 'dentist'
    },
    {
      name: 'Носов Михаил Андреевич',
      position: 'стоматолог-терапевт (микроскопист)',
      type: 'dentist'
    },
    {
      name: 'Гребнев Андрей Евгеньевич',
      position: 'стоматолог - имплантолог, стоматолог - хирург',
      type: 'dentist'
    },
    {
      name: 'Факеева Майя Константиновна',
      position: 'стоматолог - пародонтолог',
      type: 'dentist'
    },
    {
      name: 'Шестакова Светлана Игоревна',
      position: 'врач-косметолог',
      type: 'cosmetologist'
    },
    {
      name: 'Караханов Курбан Манафович',
      position: 'стоматолог - гигиенист',
      type: 'dentist'
    },
    {
      name: 'Чумакова Арина Александровна',
      position: 'стоматолог - хирург',
      type: 'dentist'
    },
    {
      name: 'Хамхоев Ибрагим Абукарович',
      position: 'стоматолог - ортопед',
      type: 'dentist'
    },
    {
      name: 'Дибирова Ашура Шариповна',
      position: 'косметолог-эстетист',
      type: 'cosmetologist',
      image: '/images/doctors/dibirova.png'
    }
  ];

  const dentists = doctors.filter(doctor => doctor.type === 'dentist');
  const cosmetologists = doctors.filter(doctor => doctor.type === 'cosmetologist');

  const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => (
    <div 
      className="bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group w-full max-w-[280px] mx-auto h-[400px] flex flex-col"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
      }}
    >
      <div className="h-[240px] bg-gradient-to-br from-[#444d42]/5 to-[#444d42]/10 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0">
          {doctor.image ? (
            <img 
              src={doctor.image} 
              alt={doctor.name}
              className="w-full h-full object-cover object-[50%_25%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                {doctor.type === 'dentist' ? (
                  <Stethoscope 
                    size={80} 
                    strokeWidth={1} 
                    className="text-[#444d42]/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out"
                  />
                ) : (
                  <Heart 
                    size={80} 
                    strokeWidth={1}
                    className="text-[#444d42]/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )}
        </div>
      </div>
      <div className="p-4 bg-gradient-to-b from-white/50 to-white/30 flex-grow flex flex-col min-h-[160px]">
        <div className="flex items-center gap-2 mb-1.5">
          <Award size={16} className="text-[#444d42]/70 flex-shrink-0" />
          <span className="text-xs text-[#444d42]/70 font-medium uppercase tracking-wider">Специалист</span>
        </div>
        <h3 className="text-base font-light text-[#444d42] mb-1.5 group-hover:text-[#2c332b] transition-colors duration-300">
          {doctor.name}
        </h3>
        <p className="text-sm text-[#444d42]/70 font-light mb-3">{doctor.position}</p>
        <button className="w-full bg-gradient-to-r from-[#444d42] to-[#3a4238] text-white py-2.5 rounded-lg hover:from-[#3a4238] hover:to-[#444d42] transition-all duration-300 font-light group-hover:shadow-lg flex items-center justify-center gap-2 text-sm mt-auto">
          <Calendar size={16} />
          <span>ЗАПИСАТЬСЯ</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f8f8] to-[#f5f5f5]">
      {/* Hero Section */}
      <div className="h-[40vh] md:h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&auto=format&fit=crop&q=80"
            alt="Modern medical facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-extralight text-white tracking-wide mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
                Наши врачи
              </h1>
              <p className="text-xl text-white/90 font-light max-w-2xl opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
                Команда высококвалифицированных специалистов с многолетним опытом работы
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Sections */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Dentists Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-8 md:mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
            <Stethoscope size={32} className="text-[#444d42]" />
            <h2 className="text-3xl md:text-4xl font-light text-[#444d42] tracking-wide">Стоматологи</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {dentists.map((doctor, index) => (
              <div key={index} className="opacity-0 animate-[fadeInUp_1s_ease-out_forwards]" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </div>

        {/* Cosmetologists Section */}
        <div>
          <div className="flex items-center gap-4 mb-8 md:mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]" style={{ animationDelay: '1.2s' }}>
            <Heart size={32} className="text-[#444d42]" />
            <h2 className="text-3xl md:text-4xl font-light text-[#444d42] tracking-wide">Косметологи</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {cosmetologists.map((doctor, index) => (
              <div key={index} className="opacity-0 animate-[fadeInUp_1s_ease-out_forwards]" style={{ animationDelay: `${1.4 + index * 0.1}s` }}>
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage; 