import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Дмитрий',
      text: 'Отличная клиника! Современное оборудование и внимательный персонал. Особенно понравился профессионализм врачей.',
      gender: 'male' as const
    },
    {
      name: 'Анна',
      text: 'Прекрасный сервис, доброжелательная атмосфера. Доктора подробно объясняют все процедуры и отвечают на все вопросы.',
      gender: 'female' as const
    },
    {
      name: 'Сергей',
      text: 'Высокий уровень обслуживания. Все процедуры проводятся очень аккуратно и профессионально.',
      gender: 'male' as const
    },
    {
      name: 'Елена',
      text: 'Замечательная клиника с современным оборудованием. Очень довольна результатами лечения и внимательным отношением персонала.',
      gender: 'female' as const
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#444d42]">
      <div className="absolute inset-0 bg-[#e1d9ca]/10"></div>
      
      <div className="container mx-auto">
        <div className="relative">
          <h2 className="text-3xl font-light text-white tracking-wide mb-12">Отзывы</h2>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="group inline-flex items-center gap-3 bg-white text-[#444d42] px-8 py-3 rounded-xl hover:bg-white/90 transition-all">
            <span className="text-sm font-light tracking-wide">Все отзывы</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-8 right-8 w-32 h-32 bg-[#444d42]/5 rounded-full blur-2xl"></div>
      <div className="absolute -top-8 left-8 w-24 h-24 bg-[#444d42]/5 rounded-full blur-xl"></div>
      
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e1d9ca' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>
    </section>
  );
};

export default ReviewsSection;