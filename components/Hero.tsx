
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/30 -z-10 rounded-l-[200px] hidden lg:block translate-x-20"></div>
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-rose-50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Método Provado por +2.500 Alunas</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              O corpo que você <span className="text-emerald-600">sempre sonhou</span>, com a leveza que você merece.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Chega de sofrer com restrições. Descubra como emagrecer de forma definitiva mantendo o prazer de comer e a sua saúde mental.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToOffer}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-emerald-200"
              >
                Quero Emagrecer Agora
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=woman${i}`} 
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="Aluna"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                <span className="text-slate-900 font-bold">4.9/5</span> de satisfação total
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            {/* Imagem Principal solicitada pelo usuário */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://i.pinimg.com/736x/a8/0b/d3/a80bd38a5cd63545a950653b571a9ca1.jpg" 
                alt="Resultado de emagrecimento real"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Elemento Flutuante: Comida Saudável */}
            <div className="absolute -top-6 -right-6 lg:-right-10 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-20 animate-bounce transition-all">
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="Alimentação Equilibrada"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Aprenda a comer</p>
                  <p className="text-xs font-bold text-slate-800">Sem Restrições</p>
                </div>
              </div>
            </div>

            {/* Elemento Flutuante: Resultados */}
            <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 z-20">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest">Meta Alcançada</p>
                <p className="text-lg font-black text-slate-900">-12kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Leaf: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);

export default Hero;
