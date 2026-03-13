import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Tag = ({ children }) => (
  <span className="text-[10px] uppercase tracking-wider font-bold bg-blue-900/30 text-blue-300 border border-blue-700/50 px-3 py-1.5 rounded-full whitespace-nowrap">
    {children}
  </span>
);

const ProjectCard = ({
  title,
  type,
  description,
  image,
  demoLink,
  codeLink,
  tags,
}) => (
  <div className="flex flex-col bg-[#2d3f5f] border border-slate-700 rounded-[2rem] overflow-hidden shadow-lg h-full">
    <div className="relative w-full h-48 bg-[#233554] overflow-hidden border-b border-slate-700 flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-blue-900/20 z-10" />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-3 gap-4">
        <h3 className="text-lg font-bold text-slate-200 leading-tight">
          {title}
        </h3>
        {type && (
          <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap mt-1">
            {type}
          </span>
        )}
      </div>

      <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {(codeLink || demoLink) && (
        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          {codeLink ? (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-blue-400 font-bold text-sm transition-colors"
            >
              Código
            </a>
          ) : (
            <div />
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600/20 text-blue-400 border border-blue-500/50 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-xl font-bold text-sm transition-all"
            >
              Ver Proyecto →
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
      description:
        "Desarrollo web enfocado en la conversión para la Lic. Melanie Chaffittelli. Arquitectura de información pensada para transmitir calma y facilitar la reserva de turnos.",
      image: "/salud.jpg",
      tags: ["React", "Tailwind CSS", "Responsive", "JavaScript"],
      demoLink: "https://web-psicloga.vercel.app",
      codeLink: null,
    },
    {
      title: "Tu Contador Express",
      type: "Sitio Corporativo",
      description:
        "Migración completa de Next.js a React + Tailwind CSS. Tabs interactivos, formulario con integración a WhatsApp y diseño responsive.",
      image: "/contador_express.jpg",
      tags: ["React", "Tailwind CSS", "Swiper", "JavaScript"],
      demoLink: "https://tu-contador-express.vercel.app",
      codeLink: null,
    },
    {
      title: "Marca Personal Ejecutiva",
      type: "Sitio Premium",
      description:
        "Sitio web premium para la consultora Marina Méndez. Estética corporativa impecable para consolidar su presencia digital y proyectar autoridad.",
      image: "/marina.jpg",
      tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      demoLink: "https://marina-mendez-r1v4.vercel.app/",
      codeLink: null,
    },
  ];

  return (
    <section id="proyectos" className="max-w-6xl mx-auto py-20 px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div className="w-full md:w-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-200 mb-4 italic leading-tight text-left">
            PROYECTOS
            <br />
            DESTACADOS
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 rounded-full" />
        </div>
        <p className="max-w-sm text-slate-400 text-sm italic text-left md:text-right">
          Soluciones digitales diseñadas para convertir visitantes en clientes
          reales.
        </p>
      </div>

      <div className="block md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1}
          style={{ paddingBottom: "3rem" }}
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
