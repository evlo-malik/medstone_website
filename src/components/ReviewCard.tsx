import React from 'react';

type ReviewCardProps = {
  name: string;
  text: string;
  gender: 'male' | 'female';
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name, text, gender }) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg min-w-[300px] max-w-[340px] flex-shrink-0 transition-all duration-300 hover:bg-white hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#444d42]/5 flex items-center justify-center">
          {gender === 'male' ? (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#444d42]" stroke="currentColor" strokeWidth="1.5">
              <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#444d42]" stroke="currentColor" strokeWidth="1.5">
              <path d="M16.5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" />
            </svg>
          )}
        </div>
        <h3 className="text-xl font-light text-[#444d42] tracking-wide">{name}</h3>
      </div>
      <p className="text-[#444d42]/70 font-light leading-relaxed">{text}</p>
    </div>
  );
};

export default ReviewCard;