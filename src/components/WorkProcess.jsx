import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    desc: "Analizo tus objetivos de negocio y definimos la mejor estrategia digital.",
    color: "blue-500",
    shadow: "blue",
  },
  {
    number: "02",
    title: "Desarrollo",
    desc: "Construyo tu sitio con código limpio, escalable y optimizado para SEO.",
    color: "emerald-500",
    shadow: "emerald",
  },
  {
    number: "03",
    title: "Lanzamiento",
    desc: "Despliegue en servidores de alta velocidad y soporte post-entrega.",
    color: "blue-300",
    shadow: "blue",
  },
];

const colorMap = {
  "blue-500": { bar: "bg-blue-500", num: "text-blue-500/20", title: "text-blue-400", shadow: "shadow-blue-900/20" },
  "emerald-500": { bar: "bg-emerald-500", num: "text-emerald-500/20", title: "text-emerald-400", shadow: "shadow-emerald-900/20" },
  "blue-300": { bar: "bg-blue-300", num: "text-blue-300/20", title: "text-blue-300", shadow: "shadow-blue-900/20" },
};

const WorkProcess = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-y border-slate-800 bg-[#0a192f]/50 py-32 mb-16 shadow-inner">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-200 mb-16 italic">MI PROCESO DE TRABAJO</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const isActive = active === index;
            const colors = colorMap[step.color];
            return (
              <div key={step.number} className={`relative bg-[#112240] p-8 rounded-2xl shadow-lg border border-slate-700 overflow-hidden transition-all duration-500 ${isActive ? `-translate-y-2 shadow-2xl ${colors.shadow} border-slate-600` : ""}`}>
                <div className={`absolute top-0 left-0 h-1.5 ${colors.bar} transition-all duration-500 ${isActive ? "w-full" : "w-0"}`} />
                <div className="space-y-4 relative z-10">
                  <div className={`text-5xl font-black transition-all duration-500 ${isActive ? `${colors.num} scale-110 -translate-y-1` : "text-slate-700"}`}>{step.number}</div>
                  <h4 className={`text-xl font-bold uppercase tracking-tighter transition-colors duration-300 ${isActive ? colors.title : "text-slate-200"}`}>{step.title}</h4>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-slate-300" : "text-slate-400"}`}>{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;