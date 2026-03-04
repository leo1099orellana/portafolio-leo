const TechStack = () => {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6 border border-slate-700/50 bg-[#2a5178]/50 backdrop-blur-md shadow-xl rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 hover:opacity-100 transition-all duration-700">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-2xl font-black text-slate-200">REACT</span>
          <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Carga ultra rápida</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-2xl font-black text-slate-200">TAILWIND</span>
          <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Diseño móvil perfecto</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-2xl font-black text-slate-200">VITE</span>
          <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Rendimiento extremo</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-2xl font-black text-slate-200">JS/ES6+</span>
          <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Interacciones dinámicas</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;