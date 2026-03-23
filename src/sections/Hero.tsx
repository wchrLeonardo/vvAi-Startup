// Lembre-se de importar a sua logo ou o placeholder temporário!
import LOGO from '../assets/LOGO.png'; // Exemplo

// 1. Dica Sênior: Separar o conteúdo em sub-componentes (React Profissional)
function HeroContent() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-xl z-10 px-4">
      {/* Slogan Grande */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-vvai-text leading-tight">
        Inteligência Artificial que <span className="text-vvai-purple">conecta</span> sua visão.
      </h1>

      {/* Slogan Pequeno/Descrição */}
      <p className="text-lg text-vvai-text/70 leading-relaxed max-w-lg">
        Na vvAi, transformamos dados em visões claras para o futuro do seu negócio, unindo lógica e criatividade.
      </p>

      {/* Div dos Cards Pequenos (Flexbox) */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Card 1 */}
        <div className="flex items-center gap-3 bg-vvai-text/5 p-4 rounded-xl border border-vvai-text/10 w-full sm:w-auto">
          {/* Futuramente trocaremos por um ícone SVG */}
          <div className="w-10 h-10 bg-vvai-purple/20 rounded-full flex items-center justify-center text-vvai-purple font-bold">IA</div>
          <span className="text-sm text-vvai-text">Análise Preditiva</span>
        </div>
        
        {/* Card 2 */}
        <div className="flex items-center gap-3 bg-vvai-text/5 p-4 rounded-xl border border-vvai-text/10 w-full sm:w-auto">
          <div className="w-10 h-10 bg-vvai-highlight/20 rounded-full flex items-center justify-center text-vvai-highlight font-bold">UX</div>
          <span className="text-sm text-vvai-text">Interfaces Inteligentes</span>
        </div>
      </div>
    </div>
  );
}

// 2. O Container Principal (O Layout Grid Split)
export default function Hero() {
  return (
    /* O Palco: H-screen ocupando a tela toda. Grid de 1 coluna (mobile) e 2 colunas (desktop). */
    <section className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center overflow-hidden bg-vvai-bg">
      
      {/* COLUNA ESQUERDA: O Conteúdo (Centralizado horizontalmente no Grid) */}
      <div className="flex justify-center md:justify-end items-center h-full px-4 md:px-12 md:mr-[-10vw]">
        <HeroContent />
      </div>

      {/* COLUNA DIREITA: O Elemento Visual (Logo) */}
      {/* h-[50vh] no mobile para não ocupar a tela toda, md:h-full no desktop */}
      <div className="relative flex justify-center items-center h-[50vh] md:h-full z-10 p-12 md:p-20">
        
        {/* Camada do Elemento Visual: Usaremos scale-up no desktop para preencher melhor */}
        {/* Esta é a div que o Framer Motion irá manipular no futuro */}
        <div className="w-full h-full flex justify-center items-center md:scale-[1.3]">
          {/* Quando você tiver a imagem SVG, desmarque e use-a */}
          <img src={LOGO} alt="Logo Visual vvAi" className="max-h-[70vh] w-auto" /> 
          
          {/* Placeholder Temporário para o Visual */}
          <div className="w-64 h-64 bg-gradient-to-br from-vvai-blue/30 via-vvai-purple/30 to-vvai-highlight/10 blur-2xl rounded-full"></div>
        </div>

        {/* Camada de Interação Invisível (absolute) - PREPARAÇÃO PARA O FUTURO */}
        {/* z-20 para garantir que o JavaScript pegue o clique por cima de tudo */}
        <div className="absolute inset-0 z-20 cursor-pointer"></div>
      </div>

    </section>
  );
}