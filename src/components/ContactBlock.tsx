import React from 'react';
import { Clock, Youtube } from 'lucide-react';

const ContactBlock: React.FC = () => {
  return (
    <section className="relative bg-[#e1d9ca] py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <img 
            src="https://evlo-malik.github.io/medstone/logo_text" 
            alt="MEDSTONE" 
            className="h-8"
          />
          <span className="text-xs font-light tracking-wider mt-1 text-[#444d42]">
            СТОМАТОЛОГИЯ И КОСМЕТОЛОГИЯ
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="relative z-10">
            <h2 className="text-3xl font-light text-[#444d42] mb-8">Контакты</h2>
            <div className="space-y-6 text-[#444d42]">
              <p className="text-2xl font-light">+7 (495)-568-06-06</p>
              <p className="text-lg font-light">info@medstone.ru</p>
              <p className="text-lg font-light">
                Москва, ул.Вавилова, д.15
              </p>
              <div className="flex gap-4 mt-8">
                <a href="#" className="p-2 hover:bg-[#444d42]/10 rounded-full transition-all">
                  <img 
                    src="https://evlo-malik.github.io/medstone/whatsapp_icon" 
                    alt="WhatsApp" 
                    className="w-5 h-5"
                  />
                </a>
                <a href="#" className="p-2 hover:bg-[#444d42]/10 rounded-full transition-all">
                  <Youtube size={20} className="text-white" />
                </a>
                <a href="#" className="p-2 hover:bg-[#444d42]/10 rounded-full transition-all">
                  <img 
                    src="https://evlo-malik.github.io/medstone/klipartz.com.png" 
                    alt="VK" 
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
          
          {/* Working Hours */}
          <div className="relative z-10">
            <h2 className="text-3xl font-light text-[#444d42] mb-8">График работы</h2>
            <div className="space-y-4 text-[#444d42]">
              <div className="flex items-start gap-3">
                <Clock size={20} />
                <div>
                  <p className="font-light">Пн-Пт: 9:00 - 21:00</p>
                  <p className="font-light">Сб-Вс: 10:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="relative z-10 lg:col-span-1">
            <h2 className="text-3xl font-light text-[#444d42] mb-8">Как добраться</h2>
            <div className="relative overflow-hidden">
              <a 
                href="https://yandex.eu/maps/org/medstone/201116839102/?utm_medium=mapframe&utm_source=maps" 
                style={{
                  color: '#eee',
                  fontSize: '12px',
                  position: 'absolute',
                  top: '0px'
                }}
              >
                Medstone
              </a>
              <a 
                href="https://yandex.eu/maps/213/moscow/category/dental_clinic/184106132/?utm_medium=mapframe&utm_source=maps" 
                style={{
                  color: '#eee',
                  fontSize: '12px',
                  position: 'absolute',
                  top: '14px'
                }}
              >
                Dental clinic in Moscow
              </a>
              <a 
                href="https://yandex.eu/maps/213/moscow/category/cosmetology/892508964/?utm_medium=mapframe&utm_source=maps" 
                style={{
                  color: '#eee',
                  fontSize: '12px',
                  position: 'absolute',
                  top: '28px'
                }}
              >
                Cosmetology in Moscow
              </a>
              <iframe 
                src="https://yandex.com/map-widget/v1/?ll=37.581000%2C55.702538&mode=search&oid=201116839102&ol=biz&z=17.84" 
                width="560" 
                height="400" 
                frameBorder="1" 
                allowFullScreen={true}
                style={{ position: 'relative' }}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor">
            <path d="M 100 0 C 130 50 130 150 100 200 M 0 100 C 50 70 150 70 200 100" strokeWidth="1"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;