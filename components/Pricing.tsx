
import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="oferta" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 blur-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 blur-[100px] -z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Pronta para sua <span className="text-emerald-400">melhor versão?</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          O método definitivo para você emagrecer com saúde, leveza e sem sofrimento por um valor promocional por tempo limitado.
        </p>

        <div className="max-w-md mx-auto bg-white rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
            OFERTA EXCLUSIVA
          </div>
          
          <div className="mb-8">
            <span className="text-slate-400 line-through text-lg">De R$ 197,00 por apenas</span>
            <div className="flex items-center justify-center gap-1 mt-2">
              <span className="text-2xl font-medium text-slate-900 self-start mt-2">R$</span>
              <span className="text-7xl font-bold text-slate-900">49</span>
              <span className="text-2xl font-medium text-slate-900">,90</span>
            </div>
            <p className="text-slate-500 mt-2 font-medium">Pagamento único e acesso vitalício</p>
          </div>

          <ul className="text-left space-y-4 mb-10">
            {[
              "Acesso vitalício ao curso",
              "Todos os módulos e atualizações",
              "Coleção completa com 5 E-books exclusivos",
              "Bônus: Guia de Receitas Práticas",
              "Garantia incondicional de 7 dias"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a 
            href="https://pay.kiwify.com.br/OLjHhem"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 no-underline"
          >
            Quero Emagrecer Agora
            <ArrowRight className="w-6 h-6" />
          </a>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>Compra 100% segura • Satisfação Garantida</span>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          <div className="text-center">
            <p className="text-4xl font-bold text-white">7 Dias</p>
            <p className="text-slate-400">Garantia Total</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">Vitalício</p>
            <p className="text-slate-400">Acesso ao Conteúdo</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">Suporte</p>
            <p className="text-slate-400">Para Todas as Dúvidas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
