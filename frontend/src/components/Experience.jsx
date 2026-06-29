import { EXPERIENCES } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Experience = () => {
  return (
    <section id="esperienza" className="bg-white px-6 py-24 text-ink md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#0097B2]">
            Percorso
          </p>
          <h2 className="font-display text-5xl font-normal tracking-tight text-ink md:text-6xl">
            Esperienza
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceRow key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceRow = ({ exp, index }) => {
  const ref = useReveal();

  return (
    <article
      ref={ref}
      className="reveal group grid gap-6 rounded-[2rem] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0097B2]/50 hover:shadow-xl md:grid-cols-[220px_1fr] md:p-8"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="mt-2 h-3 w-3 rounded-full bg-[#0097B2]" />

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0097B2]">
            {exp.period}
          </p>
          <div className="mt-4 hidden h-full min-h-16 w-px bg-[#0097B2]/40 md:block" />
        </div>
      </div>

      <div>
        <h3 className="font-display text-3xl font-normal text-ink transition-colors duration-300 group-hover:text-[#0097B2] md:text-4xl">
          {exp.company}
        </h3>

        <p className="mt-2 text-base font-semibold text-[#365E67]">
          {exp.role}
        </p>

        <p className="mt-5 max-w-3xl text-base leading-8 text-stone">
          {exp.description}
        </p>
      </div>
    </article>
  );
};
