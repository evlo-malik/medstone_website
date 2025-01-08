import React, { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#e1d9ca]/50 p-8 border border-[#444d42]/10 hover:bg-[#e1d9ca] transition-all">
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h3 className="text-xl font-light tracking-wide text-[#444d42]">{title}</h3>
      </div>
      <p className="text-[#444d42]/80 leading-relaxed font-light">{description}</p>
    </div>
  );
};

export default ServiceCard;