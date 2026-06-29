import { EXPERIENCES } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Experience = () => {
  return (
    <section
      id="esperienza"
      data-testid="experience-section"
      className="py-20 md:py-28 bg-sand"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 grid md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-span-1">
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[#0097B2]">
              Percorso
            </span>
          </div>
        
          <div className="md:col-span-3 md:pl-8">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-ink">
              Esperienza
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-[#0097B2]/35 hidden md:block" />

          <div className="space-y-4 md:space-y-0">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceRow key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceRow = ({ exp, index }) => {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      data-testid={`experience-item-${index}`}
      className="reveal grid md:grid-cols-4 gap-4 md:gap-8 py-8 md:py-10 border-b border-line group"
    >
      <div className="md:col-span-1">
        <span className="mt-3 block text-xs uppercase tracking-[0.15em] text-[#0097B2]/70">
          {exp.period}
        </span>
        
        <span className="block text-xs uppercase tracking-[0.15em] text-[#0097B2]">
          {exp.date}
        </span>
      </div>

      <div className="md:col-span-3 md:pl-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-serif text-2xl md:text-3xl text-ink transition-colors duration-300 group-hover:text-[#0097B2]">
            {exp.company}
          </h3>

          <span className="text-sm font-medium text-stone">
            {exp.role}
          </span>
        </div>

        <p className="mt-4 text-base font-light text-stone leading-relaxed max-w-3xl">
          {exp.description}
        </p>
      </div>
    </div>
  );
};
