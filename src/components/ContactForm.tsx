import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-white">
      <div className="container mx-auto max-w-lg relative z-10">
        <h2 className="text-3xl md:text-4xl font-light text-[#444d42] mb-4">
          Вам нужна консультация?
        </h2>
        <p className="text-[#444d42]/70 mb-8 font-light">
          Оставьте свои данные, мы перезвоним и ответим на все вопросы
        </p>
        
        <form className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-6 py-4 bg-[#e1d9ca]/20 border border-[#444d42]/10 focus:border-[#444d42]/30 outline-none transition-all font-light"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 bg-[#e1d9ca]/20 border border-[#444d42]/10 focus:border-[#444d42]/30 outline-none transition-all font-light"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full px-6 py-4 bg-[#e1d9ca]/20 border border-[#444d42]/10 focus:border-[#444d42]/30 outline-none transition-all font-light"
            />
          </div>
          
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1.5"
            />
            <label htmlFor="privacy" className="text-sm text-[#444d42]/70 font-light">
              Я согласен с политикой конфиденциальности
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#444d42] text-white py-4 px-8 transition-all hover:bg-[#444d42]/90 font-light"
          >
            Получить консультацию
          </button>
        </form>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute left-0 top-0 w-96 h-96 opacity-[0.02]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M0,50 C25,0 75,0 100,50 C75,100 25,100 0,50" strokeWidth="1" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-96 h-96 opacity-[0.02]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M20,20 Q50,0 80,20 Q100,50 80,80 Q50,100 20,80 Q0,50 20,20" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};

export default ContactForm;