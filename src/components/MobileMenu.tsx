import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 bg-[#444d42]/95 backdrop-blur-sm z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <Link to="/" onClick={onClose} className="h-8">
            <img 
              src="https://evlo-malik.github.io/medstone/logo_text" 
              alt="MEDSTONE" 
              className="h-full"
            />
          </Link>
          <span className="text-xs text-white font-light tracking-wider mt-1">
            СТОМАТОЛОГИЯ И КОСМЕТОЛОГИЯ
          </span>
        </div>
        <button 
          onClick={onClose}
          className="p-2 text-white hover:bg-white/10 rounded-full transition-all"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="container mx-auto px-6 mt-12">
        <div className="space-y-6">
          <Link to="/" onClick={onClose} className="block text-lg text-white font-light hover:text-white/80 transition-colors">Главная</Link>
          <Link to="/services" onClick={onClose} className="block text-lg text-white font-light hover:text-white/80 transition-colors">Услуги</Link>
          <Link to="/pricing" onClick={onClose} className="block text-lg text-white font-light hover:text-white/80 transition-colors">Стоимость</Link>
          <Link to="/doctors" onClick={onClose} className="block text-lg text-white font-light hover:text-white/80 transition-colors">Врачи</Link>
          <a href="#promotions" onClick={onClose} className="block text-lg text-white font-light hover:text-white/80 transition-colors">Акции</a>
          <a href="#insurance" onClick={onClose} className="block text-lg text-white font-light hover:text-white/80 transition-colors">Лечение по ДМС</a>
          <a href="#contacts" onClick={onClose} className="block text-lg text-white font-light hover:text-white/80 transition-colors">Контакты</a>
        </div>
        
        <div className="mt-12">
          <a href="#appointment" onClick={onClose} className="inline-block bg-white hover:bg-white/90 text-[#444d42] px-6 py-2 rounded-2xl text-sm font-light transition-all">
            Записаться онлайн
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;