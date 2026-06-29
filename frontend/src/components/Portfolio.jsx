import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Portfolio = () => {
  return (
    <section id="progetti" data-testid="portfolio-section" className="py-20 md:py-28 bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[#0097B2]">
              Portfolio
            </span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-tight text-ink">
              Progetti in evidenza
            </h2>
          </div>
          <p className="text-base font-light text-stone max-w-sm">
            Una selezione di realtà a cui ho dato voce, tra travel, cultura, healthcare e
            personal branding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, featured }) => {
  const ref = useReveal();
  return (
    <Link
      ref={ref}
      to={`/progetto/${project.slug}`}
      data-testid={`project-card-${project.slug}`}
      className={`reveal group relative block overflow-hidden rounded-3xl border border-line bg-surface hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`overflow-hidden ${featured ? "h-72 md:h-[420px]" : "h-64 md:h-72"}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-7 md:p-8">
        <span className="text-xs uppercase tracking-[0.15em] text-clay">
          {project.category}
        </span>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl md:text-3xl text-ink">{project.title}</h3>
          <span className="shrink-0 mt-1 inline-flex items-center justify-center w-10 h-10 rounded-full border border-line text-ink group-hover:bg-clay group-hover:text-white group-hover:border-clay transition-all duration-300">
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </span>
        </div>
        <p className="mt-3 text-base font-light text-stone leading-relaxed max-w-2xl">
          {project.description}
        </p>
        <span className="mt-5 inline-block text-sm font-medium text-ink border-b border-clay pb-0.5">
          View project
        </span>
      </div>
    </Link>
  );
};
