// Sub-componente para o conteúdo de texto e cards de Quem Somos
function AboutContent() {
  return (
    <div className="flex flex-col gap-6 max-w-xl z-10 px-4">
      {/* Título */}
      <h2 className="font-azonix text-3xl md:text-4xl font-extrabold text-vvai-blue-dark leading-tight">
        Quem <span className="text-vvai-highlight">Somos</span>
      </h2>

      {/* Descrição Principal */}
      <p className="text-lg text-vvai-text/80 leading-relaxed">
        A <strong className="text-vvai-purple">vvAi</strong> nasceu com a missão de democratizar o acesso à Inteligência Artificial. 
        Acreditamos que a tecnologia deve ser uma extensão da sua equipe, trabalhando incansavelmente 
        para transformar dados complexos em decisões claras e estratégicas.
      </p>

      {/* Cards de Missão e Visão (Mantendo a identidade visual do Hero) */}
      <div className="flex flex-col gap-4 mt-2">
        
        {/* Card Missão */}
        <div className="bg-white px-5 py-4 rounded-lg border border-vvai-text/5 border-l-4 border-l-vvai-purple shadow-sm w-full transition-transform hover:-translate-y-1 duration-300">
          <h3 className="font-bold text-sm text-vvai-purple tracking-wide uppercase mb-2">Nossa Missão</h3>
          <p className="text-sm text-vvai-text/70 leading-relaxed">
            Capacitar negócios de todos os tamanhos com soluções de IA acessíveis, seguras e práticas, automatizando processos e potencializando resultados.
          </p>
        </div>

        {/* Card Visão */}
        <div className="bg-white px-5 py-4 rounded-lg border border-vvai-text/5 border-l-4 border-l-vvai-highlight shadow-sm w-full transition-transform hover:-translate-y-1 duration-300">
          <h3 className="font-bold text-sm text-vvai-highlight tracking-wide uppercase mb-2">Nossa Visão</h3>
          <p className="text-sm text-vvai-text/70 leading-relaxed">
            Ser a ponte definitiva entre a inovação tecnológica e o sucesso prático do seu negócio, liderando a transformação digital com ética e eficiência.
          </p>
        </div>

      </div>
    </div>
  );
}

// O Container Principal da Seção
export default function About() {
  return (
    <section id="quem-somos" className="relative w-full min-h-screen py-20 flex items-center justify-center bg-vvai-bg overflow-hidden">
      
      {/* Container de Grid (Invertido em relação ao Hero: Imagem na esquerda, Texto na direita) */}
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        
        {/* COLUNA ESQUERDA: Elemento Visual (Abstract UI/Graphic) */}
        <div className="relative flex justify-center items-center w-full h-[40vh] md:h-full">
          {/* Fundo com efeito de luz (Glow) usando as cores da marca */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-vvai-purple to-vvai-highlight rounded-full blur-[80px] opacity-20 animate-pulse"></div>
          
          {/* Card Abstrato representando a "Mente / IA" */}
          <div className="relative z-10 w-full max-w-sm aspect-square bg-vvai-bg border border-vvai-text/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden hover:shadow-vvai-purple/20 transition-shadow duration-500">
            {/* Detalhe superior */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vvai-purple to-vvai-highlight"></div>
            
            <div className="p-8 text-center flex flex-col items-center gap-4">
               {/* Usando um visual geométrico simples para remeter a tech (pode ser substituído por uma imagem da equipe no futuro) */}
              <div className="w-20 h-20 rounded-full border-4 border-vvai-purple/30 flex items-center justify-center border-t-vvai-highlight animate-spin-slow">
                <div className="w-12 h-12 bg-vvai-purple rounded-full opacity-80"></div>
              </div>
              <span className="font-azonix text-3xl text-vvai-blue-dark opacity-20 mt-4">vvAi Tech</span>
            </div>

            {/* Detalhe inferior */}
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-vvai-highlight to-vvai-purple"></div>
          </div>
        </div>

        {/* COLUNA DIREITA: Conteúdo de Texto */}
        <div className="flex justify-center md:justify-start items-center h-full">
          <AboutContent />
        </div>

      </div>

    </section>
  );
}
