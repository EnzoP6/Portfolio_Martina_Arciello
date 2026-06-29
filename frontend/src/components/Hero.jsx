import { ArrowDownRight, Sparkles } from "lucide-react";
import { HERO, PROFILE } from "../data/content.js";

export const Hero = () => {
  const scrollTo = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-clay">
            <Sparkles size={15} strokeWidth={1.5} /> {PROFILE.location}
          </span>

          <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink">
            Social Media Manager, Content Creator &{" "}
            <span className="italic text-clay">Storytelling lover</span>
          </h1>

          <p className="mt-8 text-base md:text-lg leading-relaxed font-light text-stone max-w-xl">
            {HERO.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              data-testid="hero-projects-btn"
              onClick={() => scrollTo("#progetti")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink text-bone px-8 py-4 text-sm hover:bg-clay transition-colors duration-300"
            >
              Guarda i miei progetti
              <ArrowDownRight
                size={18}
                strokeWidth={1.5}
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300"
              />
            </button>
            <button
              data-testid="hero-contact-btn"
              onClick={() => scrollTo("#contatti")}
              className="inline-flex items-center justify-center rounded-full border border-ink text-ink px-8 py-4 text-sm hover:bg-ink hover:text-bone transition-colors duration-300"
            >
              Contattami
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-clay/15 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-line shadow-xl shadow-black/5">
              <img
                src={HERO.portrait}
                alt="Martina Arciello, Social Media Manager e Content Creator"
                className="w-full h-[420px] md:h-[520px] object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 md:right-6 bg-surface border border-line rounded-2xl px-5 py-4 shadow-lg shadow-black/5">
              <p className="font-serif text-2xl text-ink leading-none">Napoli</p>
              <p className="text-xs text-stone mt-1">Based & loving it</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 md:mt-28">
        <div className="border-t border-line pt-10">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-ink max-w-4xl">
            {HERO.intro}
          </p>
        </div>
      </div>
    </section>
  );
};
