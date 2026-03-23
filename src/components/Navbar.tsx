import { useState } from "react";
import logoNav from '../assets/logoNav.svg';
import iconeNavFaleConosco from '../assets/iconeNavFaleConosco.png';

export default function Navbar() {

  const [active, setActive] = useState('');

  return (
    /* 1. O Container Pai: Ele é invisível, serve só para grudar no topo e centralizar a barra */
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      
      {/* 2. A Barra em si: Aqui entra o design flutuante e o efeito de vidro Glassmorphism */}

      <nav className="w-full max-w-4xl flex items-center justify-between px-6 py-3 rounded-full bg-vvai-text/4 backdrop-blur-md border border-vvai-bg/20 shadow-lg">
        
        {/* LADO ESQUERDO: Logo da vvAi */}
        <div className="flex items-center gap-2 cursor-pointer">
        <img src={logoNav} alt="Logo vvAi" className="w-auto h-8" />
        </div>

        {/* LADO DIREITO: Os Links (Flexbox centralizando eles com um gap/espaço de 6) */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-vvai-text">

          <a href="#quem-somos" 
          onClick={() => setActive('quem-somos')}
           className={`px-4 py-2 rounded-full transition-all duration-300
              ${active === 'quem-somos' 
                ? 'text-vvai-text bg-vvai-bg shadow-md' // Design ATIVO: Fundo claro, texto escuro
                : 'text-vvai-text/70 hover:text-vvai-text hover:bg-vvai-text/10' // Design INATIVO: Transparente
              }`}
              >
                Quem Somos</a>


          <a href="#nossa-equipe" 
          onClick={() => setActive('nossa-equipe')}
           className={`px-4 py-2 rounded-2xl transition-all duration-300
              ${active === 'nossa-equipe' 
                ? 'text-vvai-text bg-vvai-bg shadow-md' // Design ATIVO: Fundo claro, texto escuro
                : 'text-vvai-text/70 hover:text-vvai-text hover:bg-vvai-text/10' // Design INATIVO: Transparente
              }`}
              >
                Nossa Equipe</a>

         <a 
            href="#projetos" 
            onClick={() => setActive('projetos')}
            className={`px-4 py-2 rounded-full transition-all duration-300
              ${active === 'projetos' 
                ? 'bg-vvai-bg text-vvai-text shadow-md' 
                : 'text-vvai-text/70 hover:text-vvai-text hover:bg-vvai-text/10' 
              }`}
          >
            Projetos
          </a>
          
         {/* O Botão Fale Conosco (CTA Fixo) */}
          {/* ml-4 (margin-left) para dar um respiro separando ele dos links */}
          <a 
            href="#contato" 
            className="ml-4 px-5 py-2 rounded-full bg-vvai-purple-dark text-vvai-bg font-bold hover:bg-vvai-highlight hover:text-white transition-colors duration-300 shadow-md flex items-center gap-2"
          >
            Fale Conosco
            <img src={iconeNavFaleConosco} alt="Ícone Fale Conosco" className="w-4 h-4" />
          </a>

        </div>

      </nav>
    </div>
  )
}