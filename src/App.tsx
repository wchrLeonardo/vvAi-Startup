import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import About from './sections/About'
import Team from './sections/Team'

function App() {
  return (
    <main className="min-h-screen relative">
      <Navbar />

      <Hero />  
      <About />
      <Team />

    </main>
  )
}

export default App