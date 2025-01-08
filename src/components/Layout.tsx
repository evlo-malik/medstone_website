import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Youtube } from 'lucide-react';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#e1d9ca] flex flex-col">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#444d42]/70 text-white z-50 backdrop-blur-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <div className="flex flex-col">
              <Link to="/" className="h-8">
                <img 
                  src="https://evlo-malik.github.io/medstone/logo_text" 
                  alt="MEDSTONE" 
                  className="h-full"
                />
              </Link>
              <span className="text-xs font-light tracking-wider mt-1">СТОМАТОЛОГИЯ И КОСМЕТОЛОГИЯ</span>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-sm font-light hover:text-white/80 transition-colors">Главная</Link>
              <Link to="/services" className="text-sm font-light hover:text-white/80 transition-colors">Услуги</Link>
              <Link to="/pricing" className="text-sm font-light hover:text-white/80 transition-colors">Стоимость</Link>
              <Link to="/doctors" className="text-sm font-light hover:text-white/80 transition-colors">Врачи</Link>
              <a href="#promotions" className="text-sm font-light hover:text-white/80 transition-colors">Акции</a>
              <a href="#insurance" className="text-sm font-light hover:text-white/80 transition-colors">Лечение по ДМС</a>
              <a href="#contacts" className="text-sm font-light hover:text-white/80 transition-colors">Контакты</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-all">
                <img 
                  src="https://evlo-malik.github.io/medstone/whatsapp_icon" 
                  alt="WhatsApp" 
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-all">
                <img 
                  src="https://evlo-malik.github.io/medstone/klipartz.com.png" 
                  alt="VK" 
                  className="w-5 h-5"
                />
              </a>
            </div>
            <a href="#appointment" className="hidden md:block bg-white hover:bg-white/90 text-[#444d42] px-6 py-2 rounded-2xl text-sm font-light transition-all">
              Записаться онлайн
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-all"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout; 