const WorkProcess = () => {
  return (
    <section className="border-y border-slate-800 bg-[#0a192f]/50 py-32 mb-16 shadow-inner">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-200 mb-16 italic">MI PROCESO DE TRABAJO</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="group relative bg-[#112240] p-8 rounded-2xl shadow-lg border border-slate-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-slate-600 overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full" />
            
            <div className="space-y-4 relative z-10">
              <div className="text-5xl font-black text-slate-700 transition-all duration-500 group-hover:text-blue-500/20 group-hover:scale-110 group-hover:-translate-y-1">01</div>
              <h4 className="text-xl font-bold text-slate-200 uppercase tracking-tighter transition-colors duration-300 group-hover:text-blue-400">Descubrimiento</h4>
              <p className="text-sm text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">Analizo tus objetivos de negocio y definimos la mejor estrategia digital.</p>
            </div>
          </div>

          <div className="group relative bg-[#112240] p-8 rounded-2xl shadow-lg border border-slate-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/20 hover:border-slate-600 overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-0 bg-emerald-500 transition-all duration-500 ease-out group-hover:w-full" />
            
            <div className="space-y-4 relative z-10">
              <div className="text-5xl font-black text-slate-700 transition-all duration-500 group-hover:text-emerald-500/20 group-hover:scale-110 group-hover:-translate-y-1">02</div>
              <h4 className="text-xl font-bold text-slate-200 uppercase tracking-tighter transition-colors duration-300 group-hover:text-emerald-400">Desarrollo</h4>
              <p className="text-sm text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">Construyo tu sitio con código limpio, escalable y optimizado para SEO.</p>
            </div>
          </div>

          <div className="group relative bg-[#112240] p-8 rounded-2xl shadow-lg border border-slate-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-slate-600 overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-0 bg-blue-300 transition-all duration-500 ease-out group-hover:w-full" />
            
            <div className="space-y-4 relative z-10">
              <div className="text-5xl font-black text-slate-700 transition-all duration-500 group-hover:text-blue-300/20 group-hover:scale-110 group-hover:-translate-y-1">03</div>
              <h4 className="text-xl font-bold text-slate-200 uppercase tracking-tighter transition-colors duration-300 group-hover:text-blue-300">Lanzamiento</h4>
              <p className="text-sm text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">Despliegue en servidores de alta velocidad y soporte post-entrega.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkProcess;