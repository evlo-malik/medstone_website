import React from 'react';
import { Phone, Clock } from 'lucide-react';

const ContactBar: React.FC = () => {
  return (
    <div className="bg-[#bfb19b]/90 text-white py-3 px-6 mt-16 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center text-sm font-light">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>+7 (XXX) XXX-XX-XX</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Пн-Вс: 9:00 - 21:00</span>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;