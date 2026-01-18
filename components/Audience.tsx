
import React from 'react';
import { Target, Heart, Zap, Lock } from 'lucide-react';

const Audience: React.FC = () => {
  const points = [
    {
      icon: <Target className="w-6 h-6 text-rose-500" />,
      title: "Cansada do efeito sanfona",
      description: "Para quem já tentou de tudo e vive em um ciclo interminável de perda e ganho de peso."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Prisioneira das calorias",
      description: "Para quem sente que a vida social e a felicidade dependem de um número na balança."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Fome constante e culpa",
      description: "Para quem não aguenta mais sentir fome o dia todo e culpa após cada refeição."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Lado da Imagem: A "Prisão" das Dietas Radicais */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white">
              {/* Imagem enviada pelo usuário via Postimages (Atualizada) */}
              <img 
                src="https://i.postimg.cc/fLK00Smw/Gemini-Generated-Image-d34k1od34k1od34k-(1).png" 
                alt="Mulher sentindo-se presa por padrões estéticos e dietas"
                className="w-full h-[550px] object-cover transition-all duration-700"
              />
              
              {/* Overlay dramático para reforçar a sensação de "prisão" */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
                <div className="inline-flex items-center gap-2 bg-rose-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3 self-start">
                  O Ciclo de Prisão
                </div>
                <p className="text-white text-lg font-medium leading-tight italic">
                  "Eu me sentia escrava de cada caloria. Era como se estivesse presa em uma contagem que nunca terminava."
                </p>
              </div>
            </div>
            
            {/* Elemento decorativo flutuante */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-white rounded-3xl shadow-2xl p-4 flex flex-col items-center justify-center border border-rose-100 z-20 animate-pulse">
              <Lock className="w-8 h-8 text-rose-500 mb-2" />
              <span className="text-rose-500 font-black text-xl">PRESA?</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase text-center leading-tight">Chega de sofrer</span>
            </div>
          </div>

          {/* Lado do Conteúdo: A Quem se Destina */}
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Você sente que o seu <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">corpo é uma cela?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              A maioria dos métodos tradicionais foca apenas no que você come, esquecendo que o emagrecimento real começa na liberdade da sua mente. Se você se identifica com os pontos abaixo, este é o seu lugar:
            </p>
            
            <div className="space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-rose-50 transition-colors duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-rose-600 transition-colors">{point.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-emerald-50 rounded-3xl border border-emerald-100 flex items-center gap-5">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <p className="text-emerald-900 font-semibold text-base">
                Nós não vamos te dar mais regras. Vamos te dar as chaves para sair dessa prisão de forma definitiva.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Audience;
