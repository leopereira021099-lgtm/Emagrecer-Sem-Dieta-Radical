
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">ES</span>
          </div>
          <span className="font-bold text-slate-800 tracking-tight">
            Emagrecer <span className="text-emerald-600">Sem Dieta Radical</span>
          </span>
        </div>
        
        <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
          Este produto não substitui o acompanhamento médico ou nutricional individualizado. Sempre consulte um profissional de saúde antes de iniciar qualquer mudança significativa em sua dieta.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 mb-8">
          <a href="#" className="hover:text-emerald-600 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Contato</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Perguntas Frequentes</a>
        </div>
        
        <div className="border-t border-slate-200 pt-8">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Emagrecer Sem Dieta Radical. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
