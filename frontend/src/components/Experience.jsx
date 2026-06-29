import { EXPERIENCES } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Experience = () => {
  const ref = useReveal();

  return (
    <section
      id="esperienza"
      ref={ref}
      className="reveal bg-white px-6 py-24 text-ink md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 md:grid-cols-[280px_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0097B2]">
              Percorso
            </p>
          </div>

          <div>
            <h2 className="font-display text-5xl font-normal tracking-tight text-ink md:text-6xl">
              Esperienza
            </h2>
          </div>
        </div>

        <div className="border-t border-line">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.company}
              className="group grid gap-6 border-b border-line py-8 transition-colors duration-300 md:grid-cols-[280px_1fr] md:py-10"
            >
              <div className="text-[#0097B2]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-4 text-base font-semibold">
                  {exp.period}
                </p>
              </div>

              <div>
                <h3 className="font-display text-3xl font-normal text-ink transition-colors duration-300 group-hover:text-[#0097B2] md:text-4xl">
                  {exp.company}
                </h3>

                <p className="mt-3 text-base font-semibold text-[#365E67]">
                  {exp.role}
                </p>

                <p className="mt-5 max-w-3xl text-base leading-8 text-stone">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
