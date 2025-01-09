import React, { useState } from 'react';
import { User, Stethoscope, Heart, Award, Calendar, X, Phone, Mail, MessageSquare } from 'lucide-react';

interface Doctor {
  name: string;
  position: string;
  type: 'dentist' | 'cosmetologist';
  image?: string;
}

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, doctor }) => {
  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-all duration-700 ease-out ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      {/* Luxury Backdrop with Blur */}
      <div 
        className={`absolute inset-0 bg-[#444d42]/90 transition-all duration-1000 ease-out ${
          isOpen ? 'opacity-100 backdrop-blur-[20px]' : 'opacity-0 backdrop-blur-none'
        }`}
      />

      {/* Modal Content */}
      <div 
        className={`absolute inset-0 overflow-y-auto transition-all duration-700 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header with Gradient */}
        <div className="relative p-6 md:p-8 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#444d42] to-[#3a4238] opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
          
          <div className="relative flex justify-between items-center">
            <div className="transform transition-all duration-500 translate-y-0">
              <h2 className="text-4xl text-white font-extralight tracking-wide mb-3">Запись на прием</h2>
              <p className="text-2xl text-white/80 font-light">к врачу {doctor.name}</p>
            </div>
            <button
              onClick={onClose}
              className="relative group bg-white/10 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
            >
              <X 
                size={28} 
                className="text-white/80 group-hover:text-white transform group-hover:rotate-90 transition-all duration-300" 
              />
            </button>
          </div>
        </div>

        {/* Form Content with Glass Effect */}
        <div className="px-6 md:px-8 pb-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-white/80 text-xl mb-12 text-center font-light leading-relaxed">
              Заполните все поля заявки и дождитесь ответа нашего администратора для согласования времени приема
            </p>

            <form className="space-y-8">
              <div className="grid gap-8">
                {/* Doctor Name - Pre-filled */}
                <div className="group">
                  <div className="flex items-center gap-3 relative">
                    <User className="text-white/40 flex-shrink-0 group-hover:text-white/60 transition-colors duration-300" size={20} />
                    <input
                      type="text"
                      value={doctor.name}
                      disabled
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white/60 font-light focus:outline-none disabled:border-white/20 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>

                {/* Patient Name */}
                <div className="group">
                  <div className="flex items-center gap-3 relative">
                    <User className="text-white/40 flex-shrink-0 group-hover:text-white/60 transition-colors duration-300" size={20} />
                    <input
                      type="text"
                      placeholder="Ваше Имя"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 font-light focus:outline-none focus:border-white/40 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-center gap-3 relative">
                    <Phone className="text-white/40 flex-shrink-0 group-hover:text-white/60 transition-colors duration-300" size={20} />
                    <input
                      type="tel"
                      placeholder="Номер Телефона"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 font-light focus:outline-none focus:border-white/40 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-center gap-3 relative">
                    <Mail className="text-white/40 flex-shrink-0 group-hover:text-white/60 transition-colors duration-300" size={20} />
                    <input
                      type="email"
                      placeholder="E-Mail"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 font-light focus:outline-none focus:border-white/40 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="group">
                <div className="flex gap-3 relative">
                  <MessageSquare className="text-white/40 flex-shrink-0 mt-2 group-hover:text-white/60 transition-colors duration-300" size={20} />
                  <textarea
                    placeholder="Комментарии"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 font-light focus:outline-none focus:border-white/40 resize-none transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start gap-3 group">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="appearance-none w-5 h-5 border border-white/20 rounded-md checked:bg-white/20 transition-all duration-300 mt-1"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 check:opacity-100 transition-opacity duration-300">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12">
                      <path d="M3.5 6.5l2 2 3-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <label htmlFor="privacy" className="text-white/70 text-sm font-light group-hover:text-white/90 transition-colors duration-300">
                  Согласен на обработку{' '}
                  <a href="#" className="text-white underline hover:no-underline transition-all duration-300">
                    персональных данных
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className="relative group overflow-hidden bg-white/10 text-white py-4 px-20 rounded-xl font-light transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative">ОТПРАВИТЬ</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const DoctorCard: React.FC<{ 
  doctor: Doctor;
  onAppointmentClick: (doctor: Doctor) => void;
}> = ({ doctor, onAppointmentClick }) => {
  return (
    <div 
      className="bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group w-full max-w-[280px] mx-auto flex flex-col"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
        height: '380px',
      }}
    >
      {/* Image Section - Fixed height */}
      <div className="h-[220px] bg-gradient-to-br from-[#444d42]/5 to-[#444d42]/10 relative overflow-hidden flex-shrink-0">
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

      {/* Content Section - Flex grow with min/max heights */}
      <div className="flex flex-col flex-grow min-h-[160px] max-h-[160px]">
        {/* Info Section - Flex grow */}
        <div className="p-4 pb-2 bg-gradient-to-b from-white/50 to-white/30 flex-grow">
          <div className="flex items-center gap-2 mb-1">
            <Award size={16} className="text-[#444d42]/70 flex-shrink-0" />
            <span className="text-xs text-[#444d42]/70 font-medium uppercase tracking-wider">Специалист</span>
          </div>
          <h3 className="text-base font-light text-[#444d42] mb-1 group-hover:text-[#2c332b] transition-colors duration-300 line-clamp-2">
            {doctor.name}
          </h3>
          <p className="text-sm text-[#444d42]/70 font-light line-clamp-2">{doctor.position}</p>
        </div>

        {/* Button Section - Now with fixed padding and guaranteed visibility */}
        <div className="px-4 py-3 bg-gradient-to-b from-white/30 to-white/50 border-t border-[#444d42]/5">
          <button 
            onClick={() => onAppointmentClick(doctor)}
            className="w-full bg-gradient-to-r from-[#444d42] to-[#3a4238] text-white py-2 rounded-lg hover:from-[#3a4238] hover:to-[#444d42] transition-all duration-300 font-light group-hover:shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            <Calendar size={16} className="flex-shrink-0" />
            <span className="truncate">ЗАПИСАТЬСЯ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const DoctorsPage: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAppointmentClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

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
                <DoctorCard 
                  doctor={doctor} 
                  onAppointmentClick={handleAppointmentClick}
                />
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
                <DoctorCard 
                  doctor={doctor} 
                  onAppointmentClick={handleAppointmentClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Single Modal for all doctors */}
      {selectedDoctor && (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          doctor={selectedDoctor}
        />
      )}
    </div>
  );
};

export default DoctorsPage; 