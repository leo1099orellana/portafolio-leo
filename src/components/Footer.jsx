const Footer = () => {
  return (
    <footer className="mx-6 mb-10">
      <div className="max-w-6xl mx-auto bg-[#2a5178] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-slate-700/50">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            ¿Tu proyecto está listo para <br />
            <span className="text-blue-400">dejar de ser solo un link?</span>
          </h2>

          <p className="text-slate-200 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Menos código genérico, más experiencias que convierten. <br />
            Hablemos sobre cómo llevar tu idea al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a href="https://wa.me/5491176033266" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 text-slate-300 rounded-xl font-bold text-base transition-all hover:bg-blue-500 hover:text-white">
              WHATSAPP
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=leoneltrabajo14@gmail.com"
              target="_blank"
              rel="noopener noreferrer"

              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-base transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20"
            >
              ENVIAR EMAIL
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 border-t border-slate-700/50 pt-10">
            <a
              href="https://www.linkedin.com/in/leonel-orellana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-200 hover:text-blue-400 transition-colors tracking-[0.15em] uppercase"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/leo1099orellana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-200 hover:text-blue-400 transition-colors tracking-[0.15em] uppercase"
            >
              GitHub
            </a>
          </div>
          <p className="mt-12 text-[9px] text-slate-600 font-medium tracking-[0.6em] uppercase">
            © 2026 / LEO / DESARROLLO WEB PROFESIONAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;