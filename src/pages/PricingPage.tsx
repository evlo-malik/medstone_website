import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PriceItem {
  name: string;
  price: string;
}

interface PriceSubsection {
  title: string;
  items?: PriceItem[];
}

interface PriceSection {
  title: string;
  subsections: PriceSubsection[];
}

const PricingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('dental');
  const [openSubsections, setOpenSubsections] = useState<Record<string, boolean>>({});

  const toggleSubsection = (title: string) => {
    setOpenSubsections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const sections: Record<string, PriceSection> = {
    dental: {
      title: 'Стоматология',
      subsections: [
        {
          title: 'Консультации',
          items: [
            { name: 'Прием (осмотр, консультация) врача-стоматолога детского (первичный)', price: '1500 руб.' },
            { name: 'Прием (осмотр, консультация) врача-стоматолога детского (повторный)', price: 'бесплатно' },
            { name: 'Прием (осмотр, консультация) врача-ортодонта (первичный)', price: '1500 руб.' },
            { name: 'Прием (осмотр, консультация) врача-ортодонта (повторный)', price: 'бесплатно' },
            { name: 'Прием (осмотр, консультация) врача-стоматолога-хирурга (первичный)', price: '1500 руб.' },
            { name: 'Прием (осмотр, консультация) врача-стоматолога-хирурга (повторный)', price: 'бесплатно' },
            { name: 'Прием (осмотр) врача-стоматолога-терапевта/стоматолога общей практики (первичный)', price: '1500 руб.' },
            { name: 'Прием (осмотр) врача-стоматолога-терапевта/стоматолога общей практики (повторный)', price: 'бесплатно' },
            { name: 'Прием (осмотр, консультация) врача-стоматолога-ортопеда (первичный)', price: '1500 руб.' },
            { name: 'Прием (осмотр, консультация) врача-стоматолога-ортопеда (повторный)', price: 'бесплатно' }
          ]
        },
        {
          title: 'Диагностика',
          items: [
            { name: 'Прицельная внутриротовая контактная рентгенография(визиографическое исследование)', price: '300 руб.' },
            { name: 'Прицельная внутриротовая контактная рентгенография(визиографическое исследование) повторно', price: '300 руб.' },
            { name: 'Ортопантомография', price: '1300 руб.' },
            { name: 'Ортопантомография (повторная)', price: '900 руб.' },
            { name: 'Трехмерное рентгенологическое исследование области размером 10*8,5см Vatech (Компьютерная томография челюстно-лицевой области), с выдачей результата на цифровом носителе', price: '3500 руб.' },
            { name: 'Цифровое сканирование двух челюстей', price: '5000 руб.' }
          ]
        },
        {
          title: 'Гигиена и отбеливание',
          items: [
            { name: 'Профессиональная гигиена полости рта', price: '7200 руб.' },
            { name: 'Отбеливание Zoom 4 (2 челюсти)', price: '45000 руб.' },
            { name: 'Отбеливание Amazing White', price: '17000 руб.' }
          ]
        },
        {
          title: 'Терапия',
          items: [
            { name: 'Vector- терапия за одну челюсть', price: '9000 руб.' },
            { name: 'Закрытие фиссур герметиком ICON (1 зуб)', price: '3500 руб.' },
            { name: 'Лечение периодонтита (в зависимости от количества корневых каналов)', price: 'от 18500 до 39500 руб.' },
            { name: 'Лечение пульпита (в зависимости от количества корневых каналов)', price: 'от 18000 до 39000 руб.' },
            { name: 'Лечение кариеса (среднего/глубокого)', price: 'от 8500 до 13500 руб.' }
          ]
        },
        {
          title: 'Сплинт терапия',
          items: [
            { name: 'Каппа от бруксизма', price: 'от 10000 руб.' },
            { name: 'Защитная спортивная каппа', price: 'от 13000 руб.' },
            { name: 'Суставная шина AVANTIS', price: 'от 47000 руб.' },
            { name: 'Сплинты', price: 'от 35000 руб.' }
          ]
        },
        { title: 'Хирургия' },
        { title: 'Ортопедия' },
        { title: 'Ортодонтия' },
        { title: 'Детская стоматология' }
      ]
    },
    cosmetology: {
      title: 'Косметология',
      subsections: [
        { title: 'Удаление новообразований' },
        { title: 'Аппаратная косметология' },
        { title: 'Инъекционная косметология' },
        { title: 'Уходовые косметологические процедуры' },
        { title: 'Консультация и диагностика' }
      ]
    },
    laboratory: {
      title: 'Лабораторные исследования',
      subsections: []
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <div className="h-[40vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&auto=format&fit=crop&q=80"
            alt="Pricing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extralight text-white tracking-wide mb-4">
              Стоимость
            </h1>
            <p className="text-xl text-white/90 font-light max-w-2xl">
              Полный перечень услуг с актуальными ценами
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Section Navigation */}
        <div className="flex flex-wrap gap-4 mb-12">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-6 py-3 rounded-xl font-light transition-all duration-300 ${
                activeSection === key
                  ? 'bg-[#444d42] text-white'
                  : 'bg-white/80 text-[#444d42] hover:bg-white'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Subsections */}
        <div className="bg-[#e1d9ca]/30 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-light text-[#444d42] mb-8 tracking-wide">
            {sections[activeSection].title}
          </h2>
          
          <div className="space-y-4">
            {sections[activeSection].subsections.map((subsection, index) => (
              <div 
                key={index} 
                className="bg-white/80 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white group"
              >
                <button
                  onClick={() => toggleSubsection(subsection.title)}
                  className="w-full px-8 py-5 flex justify-between items-center bg-gradient-to-r from-[#444d42] via-[#4d574a] to-[#5b665e] text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/5 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Button Content */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-1 h-8 bg-white/20 rounded-full" />
                    <h3 className="text-xl font-light tracking-wide">
                      {subsection.title}
                    </h3>
                  </div>
                  {subsection.items && (
                    <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      {openSubsections[subsection.title] ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  )}
                </button>

                {subsection.items && openSubsections[subsection.title] && (
                  <div className="divide-y divide-[#444d42]/5 bg-gradient-to-b from-white to-[#f8f8f8]">
                    {subsection.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="flex justify-between items-center px-8 py-4 hover:bg-[#444d42]/5 transition-all duration-300"
                      >
                        <span className="text-[#444d42] font-light pr-4 flex-1">{item.name}</span>
                        <span className={`font-light whitespace-nowrap ${
                          item.price === 'бесплатно' 
                            ? 'text-green-600/70' 
                            : 'text-[#444d42]/70'
                        }`}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {!subsection.items && (
                  <div className="px-8 py-5 text-center text-[#444d42]/70 bg-gradient-to-b from-white to-[#f8f8f8]">
                    <button className="text-sm hover:text-[#444d42] transition-colors duration-300">
                      Узнать стоимость →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {activeSection === 'laboratory' && (
            <div className="text-center mt-8">
              <p className="text-[#444d42]/70 font-light mb-6">
                Стоимость лабораторных исследований зависит от типа анализа.
                Пожалуйста, свяжитесь с нами для получения подробной информации.
              </p>
              <button className="bg-[#444d42] text-white px-8 py-3 rounded-xl hover:bg-[#444d42]/90 transition-all font-light">
                Узнать стоимость
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 