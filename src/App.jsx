import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import WorkProcess from './components/WorkProcess';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a192f] text-slate-300 font-sans selection:bg-blue-500/30">
      
      <div 
        className="pointer-events-none fixed inset-0 z-0 h-full w-full" 
        style={{ background: 'radial-gradient(800px circle at 50% 30%, rgba(29, 78, 216, 0.15), transparent 80%)' }}
      />

      <div className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <WorkProcess />
        <Education />
        <Footer />
      </div>

    </div>
  );
}

export default App;