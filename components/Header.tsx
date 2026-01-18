
import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              {/* Substituída a imagem por um ícone leve e moderno */}
              <Leaf className="w-6 h-6 md:w-7 md:h-7 text-emerald-600" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-800 tracking-tight text-sm md:text-base leading-tight">
              Emagrecer
            </span>
            <span className="text-emerald-600 font-medium text-[10px] md:text-xs uppercase tracking-[0.15em] leading-none">
              Sem Dieta Radical
            </span>
          </div>
        </div>
        
        <button 
          onClick={scrollToOffer}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-95"
        >
          Começar Agora
        </button>
      </div>
    </header>
  );
};

export default Header;
