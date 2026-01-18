
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      age: 34,
      text: "Nunca achei que conseguiria emagrecer sem sofrer. Esse curso mudou minha relação com a comida. Já foram 8kg sem deixar de comer minha pizza no final de semana!",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Juliana Mendes",
      age: 42,
      text: "O melhor investimento que já fiz em mim mesma. O método é tão simples que parece mágica, mas é pura ciência e respeito ao nosso corpo.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Carla Ferreira",
      age: 29,
      text: "Eu vivia de dieta em dieta. Pela primeira vez na vida, sinto que tenho o controle e não a comida. Me sinto leve, disposta e muito mais feliz!",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">
          Quem já transformou sua vida
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl relative mt-10">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img 
                  src={t.img} 
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <div className="mt-10 mb-6 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <p className="font-bold text-slate-900">{t.name}, {t.age} anos</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-rose-50 rounded-2xl border border-rose-100 max-w-2xl mx-auto">
          <p className="text-rose-700 font-medium">
            Junte-se a mais de <span className="font-bold">2.500 mulheres</span> que já escolheram o caminho da leveza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
