import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei' // 'drei' é uma biblioteca de ajudantes incríveis

import LOGO from '../assets/LOGO.png';

// 1. Separar o conteúdo em sub-componentes (React Profissional)
function HeroContent() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-xl z-10 px-4">
      {/* Slogan Grande */}
      <h1 className="font-azonix text-4xl md:text-5xl font-extrabold text-vvai-blue-dark leading-tight">
        Inteligência Artificial que <span className="text-vvai-highlight">conecta</span> sua visão.
      </h1>

      {/* Slogan Pequeno/Descrição */}
      <p className="text-lg text-vvai-text/80 leading-relaxed max-w-lg">
        Na vvAi, transformamos dados em visões claras para o futuro do seu negócio, unindo lógica e criatividade.
      </p>

      {/* Div dos Cards Pequenos (Flexbox Pai) */}
      {/* Mudei items-center para items-stretch para que ambos os cards tenham a mesma altura, independente do texto */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">

        {/* Card 1 */}
        <div className="flex flex-col items-start gap-1 bg-white p-5 rounded-lg border border-vvai-text/5 border-l-4 border-l-vvai-purple shadow-sm w-full sm:max-w-[240px]">
          {/* Ícone temporário (um emoji ou SVG depois) */}
          <div className="text-xl">🛡️</div>

          {/* Título */}
          <h3 className="font-bold text-sm text-vvai-purple tracking-wide uppercase">Seguro</h3>

          {/* Descrição nova */}
          <p className="text-xs text-vvai-text/70 leading-relaxed">
            Tecnologia avançada para proteger seus dados e garantir a confiabilidade da IA.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start gap-1 bg-white p-5 rounded-lg border border-vvai-text/5 border-l-4 border-l-vvai-highlight shadow-sm w-full sm:max-w-[240px]">
          <div className="text-xl">⚡</div>
          <h3 className="font-bold text-sm text-vvai-highlight tracking-wide uppercase">Prático</h3>
          <p className="text-xs text-vvai-text/70 leading-relaxed">
            A experiência fluida e intuitiva que você gostaria que todas as ferramentas tivessem.
          </p>
        </div>

      </div>
    </div>
  );
}

// 2. O Container Principal (O Layout Grid Split)
export default function Hero() {
  return (
    /* O Palco: H-screen ocupando a tela toda. Grid de 1 coluna (mobile) e 2 colunas (desktop). */
    <section className="relative w-full min-h-screen pt-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center overflow-hidden bg-vvai-bg">

      {/* COLUNA ESQUERDA: O Conteúdo (Centralizado horizontalmente no Grid) */}
      <div className="flex justify-center md:justify-end items-center h-full px-4 md:px-12 md:mr-[-10vw]">
        <HeroContent />
      </div>

      {/* COLUNA DIREITA: O Elemento Visual (Logo 3D Híbrido) */}
      {/* 1. Removemos todas as animações CSS e perspectivas manuais. O Canvas cuida disso. */}
      <div className="relative flex justify-center items-center h-[50vh] md:h-full z-10 overflow-hidden">

        {/* O MOTOR 3D (React Three Fiber Canvas) */}
        {/* O Canvas preenche automaticamente 100% da altura e largura da div pai */}
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>

          {/* A. ILUMINAÇÃO (Essencial para ver qualquer objeto) */}
          {/* ambientLight: Uma luz suave que ilumina a cena inteira por igual */}
          <ambientLight intensity={0.5} />
          {/* pointLight: Uma luz que emana de um ponto específico (como uma lâmpada) */}
          <pointLight position={[10, 10, 10]} intensity={1} color="#AE42EF" /> {/* Usando o Pink Highlight da vvAi */}

          {/* B. CONTROLES (Ajudante 'drei' para teste) */}
          {/* OrbitControls: Permite que você clique com o mouse e gire a cena. Ótimo para testarmos o 3D. */}
          <OrbitControls enableZoom={false} />

          {/* C. O OBJETO "HELLO WORLD" (Placeholder para testar o motor) */}
          {/* Vamos criar um cubo simples e roxo, já usando a geometria real */}
          <mesh rotation={[10, 10, 0]}>
            {/* Definimos a geometria (forma) */}
            <boxGeometry args={[2, 2, 2]} />
            {/* Definimos o material (a superfície) e a cor */}
            <meshStandardMaterial color="#8754F2" wireframe /> {/* Usando o Purple da vvAi e wireframe para ver os vértices */}
          </mesh>

          {/* D. PREVIEW DO "BRILHINHO" (Opcional, já testando o clima) */}
          {/* Sparkles: Outro ajudante 'drei' que cria partículas aleatórias no espaço */}
          <Sparkles count={50} scale={3} size={2} speed={0.3} color="#AE42EF" />

        </Canvas>

        {/* Removemos a camada invisível de interação, o Canvas já pega os cliques! */}
      </div>

    </section>
  );
}