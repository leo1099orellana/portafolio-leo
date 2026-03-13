import { useEffect, useState } from "react";

const Education = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <div className={`transition-all duration-700 bg-gradient-to-br from-[#172a45] to-[#0a192f] rounded-3xl p-12 text-center relative overflow-hidden shadow-xl border cursor-default ${active ? "-translate-y-2 shadow-2xl shadow-blue-500/20 border-blue-500/50" : "border-blue-800/30"}`}>

        <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${active ? "bg-blue-400/20 scale-150" : "bg-blue-500/10"}`} />

        <h2 className={`text-2xl font-bold mb-6 relative z-10 uppercase tracking-widest transition-colors duration-500 ${active ? "text-white" : "text-slate-300"}`}>
          Respaldo Académico
        </h2>

        <p className={`max-w-2xl mx-auto text-lg md:text-xl font-medium mb-8 relative z-10 transition-colors duration-500 ${active ? "text-slate-200" : "text-slate-400"}`}>
          Formación técnica en Programación en la{" "}
          <span className={`font-black transition-colors duration-500 ${active ? "text-blue-400" : "text-blue-500"}`}>UNAB</span>{" "}
          y Licenciatura en la{" "}
          <span className={`font-black transition-colors duration-500 ${active ? "text-blue-400" : "text-blue-500"}`}>UNDEF</span>.
          Combino la lógica del desarrollo con una mentalidad estratégica y prolija.
        </p>

        <div className={`inline-block px-6 py-2 rounded-full text-xs font-bold tracking-widest relative z-10 shadow-inner transition-all duration-500 border ${active ? "bg-blue-500/20 border-blue-400/60 text-blue-300" : "bg-blue-900/20 border-blue-500/30 text-blue-400"}`}>
          QUILMES, BS AS, ARGENTINA
        </div>

      </div>
    </section>
  );
};

export default Education;