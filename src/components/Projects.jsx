import React from 'react';

const Tag = ({ children }) => (
  <span className="text-[10px] uppercase tracking-wider font-bold bg-blue-900/30 text-blue-300 border border-blue-700/50 px-3 py-1.5 rounded-full whitespace-nowrap">
    {children}
  </span>
);

const ProjectCard = ({ title, type, description, image, video, demoLink, codeLink, tags }) => (
  <div className="group flex flex-col bg-[#2d3f5f] border border-slate-700 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2">
    
    <div className="relative w-full h-56 bg-[#233554] overflow-hidden border-b border-slate-700 flex-shrink-0">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
      {video && (
        <video src={video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
      )}
      <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
         <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Captura del Proyecto</span>
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow relative z-20">
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-xl md:text-2xl font-bold text-slate-200 leading-tight">{title}</h3>
        {type && (
          <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap mt-1">
            {type}
          </span>
        )}
      </div>

      <p className="text-slate-200 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </div>

      {(codeLink || demoLink) && (
        <div className="flex items-center justify-between pt-6 border-t border-slate-700">
          {codeLink ? (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-blue-400 font-bold text-sm flex items-center gap-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.14 4.14 0 0 0-.09-3.15s-1.12-.35-3.5 1.3a11.4 11.4 0 0 0-6 0C8.12 2.15 7 2.5 7 2.5a4.14 4.14 0 0 0-.09 3.15A4.6 4.6 0 0 0 5.5 8.88c0 5.6 3.35 6.65 6.5 7A4.8 4.8 0 0 0 11 18v4"></path></svg>
              Código
            </a>
          ) : <div />}
          
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600/20 text-blue-400 border border-blue-500/50 hover:bg-blue-600 hover:text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md">
              Ver Proyecto
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projectsData = [
    {
      title: "Salud Mental Digital",
      type: "Landing Page",
      description: "Desarrollo web enfocado en la conversión para la Lic. Melanie Chaffittelli. Arquitectura de información pensada para transmitir calma y facilitar la reserva de turnos de pacientes de forma instantánea.",
      image: "/Psico.jpg",
      video: null,
      tags: ["React", "Tailwind CSS", "Responsive", "JavaScript"],
      demoLink: "https://web-psicloga.vercel.app",
      codeLink: null
    },
    {
      title: "Marca Personal Ejecutiva",
      type: "Sitio Premium",
      description: "Diseño e implementación de un sitio web premium para la consultora Marina Méndez. Navegación fluida y estética corporativa impecable para consolidar su presencia digital y proyectar autoridad.",
      image: "/Marina_Mendez.jpg",
      video: null,
      tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      demoLink: "https://marina-mendez-r1v4.vercel.app/",
      codeLink: null
    }
  ];

  return (
    <section id="proyectos" className="max-w-6xl mx-auto py-32 px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-200 mb-4 italic">PROYECTOS<br />DESTACADOS</h2>
          <div className="w-20 h-1.5 bg-blue-500 rounded-full" />
        </div>
        <p className="max-w-sm text-slate-400 text-sm italic">
          Soluciones digitales diseñadas para convertir visitantes en clientes reales.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;