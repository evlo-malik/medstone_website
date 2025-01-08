import React from 'react';
import { Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#444d42] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="block h-8 mb-4">
              <img 
                src="https://evlo-malik.github.io/medstone/logo_text" 
                alt="MEDSTONE" 
                className="h-full brightness-0 invert"
              />
            </Link>
            <p className="text-sm font-light text-white/70 leading-relaxed">
              Авторская стоматология и косметология, где передовые технологии и экспертный подход создают здоровье и красоту
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-light mb-6">Навигация</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-sm font-light text-white/70 hover:text-white transition-colors">Главная</Link>
              <Link to="/services" className="block text-sm font-light text-white/70 hover:text-white transition-colors">Услуги</Link>
              <Link to="/pricing" className="block text-sm font-light text-white/70 hover:text-white transition-colors">Стоимость</Link>
              <a href="#doctors" className="block text-sm font-light text-white/70 hover:text-white transition-colors">Врачи</a>
              <a href="#promotions" className="block text-sm font-light text-white/70 hover:text-white transition-colors">Акции</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-light mb-6">Контакты</h3>
            <div className="space-y-3">
              <p className="text-sm font-light text-white/70">+7 (495)-568-06-06</p>
              <p className="text-sm font-light text-white/70">info@medstone.ru</p>
              <p className="text-sm font-light text-white/70">Москва, ул.Вавилова, д.15</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-all">
                  <img 
                    src="https://evlo-malik.github.io/medstone/whatsapp_icon" 
                    alt="WhatsApp" 
                    className="w-5 h-5 brightness-0 invert"
                  />
                </a>
                <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-all">
                  <Youtube size={20} />
                </a>
                <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-all">
                  <img 
                    src="https://evlo-malik.github.io/medstone/klipartz.com.png" 
                    alt="VK" 
                    className="w-5 h-5 brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-light mb-6">Режим работы</h3>
            <div className="space-y-3">
              <p className="text-sm font-light text-white/70">Пн-Пт: 9:00 - 21:00</p>
              <p className="text-sm font-light text-white/70">Сб-Вс: 10:00 - 20:00</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm font-light text-white/50 text-center">
            © {new Date().getFullYear()} MEDSTONE. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 