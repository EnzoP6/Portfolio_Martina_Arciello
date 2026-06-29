import { ABOUT } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const spans = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-8",
];

export const About = () => {
  const ref = useReveal();
  return (
    <section id="about" data-testid="about-section" className="py-20 md:py-28 bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-clay">
              About
            </span>
            <p className="mt-6 font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-ink">
              {ABOUT.paragraph}
            </p>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-base md:text-lg font-light text-stone leading-relaxed">
              Formazione in Comunicazione Pubblica e d'Impresa. Approccio pratico,
              contemporaneo e sempre orientato alle persone, tra Instagram, TikTok e i
              linguaggi delle nuove generazioni.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-3xl md:text-4xl text-ink mb-8">What I do</h3>
          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            {ABOUT.skills.map((skill, i) => (
              <SkillCard key={skill.title} skill={skill} span={spans[i % spans.length]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, span }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      data-testid={`skill-card-${skill.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
      className={`reveal ${span} group rounded-3xl border border-line bg-surface p-7 md:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-500`}
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="font-serif text-2xl md:text-3xl text-ink">{skill.title}</h4>
      </div>
      <p className="mt-3 text-sm md:text-base font-light text-stone leading-relaxed">
        {skill.desc}
      </p>
    </div>
  );
};
