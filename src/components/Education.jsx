const Education = () => {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      {/* Agregamos la clase 'group' para controlar el interior, y los efectos de elevación y resplandor al borde/sombra */}
      <div className="group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 bg-gradient-to-br from-[#172a45] to-[#0a192f] rounded-3xl p-12 text-center relative overflow-hidden shadow-xl border border-blue-800/30 cursor-default">
        
        {/* LA MAGIA DE LA LUZ: Al pasar el mouse, este círculo de luz se expande (scale-150) y se ilumina más */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-blue-400/20 group-hover:scale-150" />
        
        <h2 className="text-2xl font-bold mb-6 relative z-10 uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors duration-300">
          Respaldo Académico
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-medium mb-8 relative z-10 text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
          Formación técnica en Programación en la <span className="font-black text-blue-500 group-hover:text-blue-400 transition-colors">UNAB</span> y Licenciatura en la <span className="font-black text-blue-500 group-hover:text-blue-400 transition-colors">UNDEF</span>.
          Combino la lógica del desarrollo con una mentalidad estratégica y prolija.
        </p>
        
        {/* La píldora también "reacciona" iluminando su propio borde y fondo */}
        <div className="inline-block px-6 py-2 border border-blue-500/30 bg-blue-900/20 rounded-full text-xs font-bold tracking-widest relative z-10 text-blue-400 shadow-inner transition-all duration-500 group-hover:bg-blue-500/20 group-hover:border-blue-400/60 group-hover:text-blue-300">
          QUILMES, BS AS, ARGENTINA
        </div>
      </div>
    </section>
  );
};

export default Education;