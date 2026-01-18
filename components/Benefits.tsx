
import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "Aprenda a emagrecer sem dietas restritivas",
    "Coma sem culpa e entenda seus sinais de fome",
    "Crie uma rotina leve e perfeitamente possível",
    "Entenda como seu corpo funciona na prática",
    "Resultados reais sem precisar sofrer",
    "Aplique tudo no seu dia a dia, mesmo sem tempo"
  ];

  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Resultados que Permanecem</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Uma transformação baseada em <span className="text-emerald-600">liberdade</span> e não em prisão.
          </h2>
          
          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
            Esqueça tudo o que te disseram sobre emagrecimento ser um processo de dor. Aqui, focamos no bem-estar, na ciência e na consistência que gera orgulho.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-emerald-50 hover:border-emerald-100 transition-all group">
                <div className="shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <span className="text-lg text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 py-2 text-slate-400 italic text-lg">
                "Este é o último projeto de emagrecimento que você vai precisar."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
