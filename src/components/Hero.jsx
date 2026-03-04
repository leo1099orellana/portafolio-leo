const Hero = () => {
  return (
    <section className="relative max-w-6xl mx-auto pt-32 pb-20 px-6 text-center">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase shadow-sm">
        Disponible para proyectos freelance
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black text-slate-100 mb-8 tracking-tighter">
        Hola, soy <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">Leo.</span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 leading-relaxed mb-10">
        Transformo ideas en <span className="text-slate-200 font-medium">experiencias digitales</span> de alto impacto. Desarrollo sitios web rápidos, modernos y optimizados para convertir.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="#proyectos" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
          VER PROYECTOS
        </a>
        <a href="mailto:leoneltrabajo14@gmail.com" target="_blank" rel="noreferrer" className="bg-transparent border border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-black hover:bg-blue-400/10 transition-all shadow-sm">
          EMAIL
        </a>
      </div>
    </section>
  );
};

export default Hero;