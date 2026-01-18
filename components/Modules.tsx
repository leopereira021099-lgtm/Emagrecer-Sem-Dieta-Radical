
import React from 'react';
import { BookOpen, Users, Layout, Clock } from 'lucide-react';

const Modules: React.FC = () => {
  const modules = [
    {
      id: "01",
      title: "Mentalidade e Relação com a Comida",
      description: "Descubra como reprogramar seus pensamentos sobre comida, eliminar a sabotagem e construir uma base psicológica sólida para o seu novo corpo.",
      icon: <Users className="w-6 h-6 text-emerald-600" />
    },
    {
      id: "02",
      title: "O Método na Prática",
      description: "Entenda exatamente como funciona o emagrecimento leve. Sem cálculos complexos, apenas diretrizes simples que funcionam de verdade.",
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />
    },
    {
      id: "03",
      title: "Planejamento e Rotina Realista",
      description: "Como organizar suas refeições mesmo em semanas caóticas. Truques práticos para manter o foco sem precisar de horas na cozinha.",
      icon: <Layout className="w-6 h-6 text-emerald-600" />
    },
    {
      id: "04",
      title: "Constância e Manutenção",
      description: "O segredo para não engordar nunca mais. Aprenda a lidar com exceções, festas e momentos de estresse mantendo o equilíbrio.",
      icon: <Clock className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section className="py-20 bg-emerald-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            O que você vai aprender
          </h2>
          <p className="text-lg text-slate-600">
            Um passo a passo completo, do zero à sua melhor versão.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="flex gap-6 p-8 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:border-emerald-300 transition-colors">
              <div className="shrink-0">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center font-bold text-emerald-700 text-xl">
                  {module.id}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{module.title}</h3>
                <p className="text-slate-600 leading-relaxed">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
