import { useEffect, useState } from "react";

const techs = [
  { name: "REACT", desc: "Carga ultra rápida" },
  { name: "TAILWIND", desc: "Diseño móvil perfecto" },
  { name: "VITE", desc: "Rendimiento extremo" },
  { name: "JS/ES6+", desc: "Interacciones dinámicas" },
];

const TechStack = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % techs.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-20 px-6 border border-slate-700/50 bg-[#2a5178]/50 backdrop-blur-md shadow-xl rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {techs.map((tech, index) => (
          <div key={tech.name} className={`flex flex-col items-center gap-2 text-center transition-all duration-500 ${active === index ? "opacity-100 scale-110" : "opacity-40 scale-100"}`}>
            <span className={`text-2xl font-black transition-colors duration-500 ${active === index ? "text-blue-400" : "text-slate-200"}`}>
              {tech.name}
            </span>
            <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">{tech.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;