export default function Projects() {
  return (
    // Fundo preto absoluto e py-32 (padding y bem grande) para a seção respirar sem limite de altura
    <section id="projetos" className="relative w-full py-32 bg-vvai-text overflow-hidden">
      
      {/* Efeitos de Iluminação de Fundo (Glows no fundo preto ficam incríveis) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-vvai-highlight/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-vvai-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-vvai-highlight"></div>
            <span className="text-vvai-highlight font-bold tracking-widest uppercase text-sm">Nosso Ecossistema</span>
          </div>
          <h2 className="font-azonix text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Projetos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-vvai-purple to-vvai-highlight">Destaque</span>
          </h2>
        </div>

        {/* O FLAGSHIP SHOWCASE (O Mega Card do Calmwave) */}
        {/* Usamos o truque da "Borda de Gradiente Animada" envolvendo tudo */}
        <div className="group relative w-full rounded-3xl bg-gradient-to-br from-vvai-text/20 via-vvai-text/5 to-transparent p-[1px] shadow-2xl hover:shadow-vvai-purple/20 transition-all duration-700">
          
          {/* O Fundo real do card (Preto fosco) */}
          <div className="relative w-full h-full bg-[#050505] rounded-[23px] overflow-hidden flex flex-col lg:flex-row">
            
            {/* COLUNA ESQUERDA: Informações e Copy */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              
              {/* Logo / Nome do Projeto */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-vvai-purple to-vvai-blue-dark flex items-center justify-center shadow-[0_0_20px_rgba(135,84,242,0.4)]">
                  {/* Ícone de onda sonora (Placeholder SVG) */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-wide">Calmwave</h3>
              </div>

              {/* Descrição e Contexto Técnico */}
              <p className="text-vvai-bg text-lg leading-relaxed mb-8 max-w-xl">
                Uma solução revolucionária de acessibilidade impulsionada por IA. 
                Utilizamos arquiteturas avançadas de <strong className="text-vvai-highlight font-medium">redes neurais para processamento e isolamento de som</strong> em tempo real, 
                projetada especificamente para transformar a qualidade de vida de pessoas com Transtorno do Processamento Auditivo Central (TPAC).
              </p>

              {/* Tags de Tecnologia (Pills) */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-vvai-purple/10 text-vvai-purple border border-vvai-purple/20">Deep Learning</span>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-vvai-highlight/10 text-vvai-highlight border border-vvai-highlight/20">Acessibilidade</span>
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-vvai-blue border border-white/10">Processamento de Áudio</span>
              </div>

              {/* CTA (Botão com seta que move no hover) */}
              <a href="#" className="inline-flex items-center gap-3 text-white font-bold tracking-wide hover:text-vvai-highlight transition-colors w-max">
                Conheça a Tecnologia
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* COLUNA DIREITA: O Elemento Visual (Arte do Projeto) */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-full bg-[#0a0a0f] border-l border-white/5 overflow-hidden">
              
              {/* Efeito Parallax no Hover */}
              <div className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out">
                {/* AQUI ENTRA A ARTE DA CALMWAVE. 
                  Como placeholder temporário, fiz uma arte gerada por CSS que simula ondas neurais/sonoras. 
                  Depois você troca pelo src da imagem real do app!
                */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vvai-purple/40 via-[#0a0a0f] to-[#0a0a0f]"></div>
                
                {/* Linhas de "Frequência Sonora" Abstratas */}
                <div className="w-full h-full flex items-center justify-center gap-2 px-12 opacity-50 mix-blend-screen">
                  {[...Array(15)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-2 bg-gradient-to-t from-vvai-highlight to-vvai-purple rounded-full animate-pulse"
                      style={{ 
                        height: `${Math.random() * 60 + 20}%`, 
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: `${Math.random() * 2 + 1}s` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}