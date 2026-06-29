import { ArrowDownRight, Sparkles } from "lucide-react";
import { HERO, PROFILE } from "../data/content";

export const Hero = () => {
  const scrollTo = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden bg-[#F9F8F6] pt-36 pb-20 md:pt-44 md:pb-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#0097B2] md:text-sm">
            <Sparkles size={15} strokeWidth={1.5} />
            {PROFILE.location}
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-[#191919] md:text-6xl lg:text-7xl">
            Social Media Manager, Content Creator &{" "}
            <span className="italic text-[#0097B2]">
              Storytelling lover
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-stone md:text-lg">
            {HERO.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              data-testid="hero-projects-btn"
              type="button"
              onClick={() => scrollTo("#progetti")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#365E67] px-8 py-4 text-sm text-white transition-colors duration-300 hover:bg-[#0097B2]"
            >
              Guarda i miei progetti
              <ArrowDownRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </button>

            <button
              data-testid="hero-contact-btn"
              type="button"
              onClick={() => scrollTo("#contatti")}
              className="inline-flex items-center justify-center rounded-full border border-[#365E67] px-8 py-4 text-sm text-[#365E67] transition-colors duration-300 hover:bg-[#365E67] hover:text-white"
            >
              Contattami
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#0097B2]/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-xl shadow-black/5">
              <img
                src="/images/martina.jpeg"
                alt="Martina Arciello, Social Media Manager e Content Creator"
                className="h-[420px] w-full rounded-[1.5rem] object-cover md:h-[520px]"
                loading="eager"
              />
            </div>

            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-lg shadow-black/5 md:right-6">
              <p className="font-serif text-2xl leading-none text-[#191919]">
                Napoli
              </p>
              <p className="mt-1 text-xs text-stone">
                Based & loving it
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-6 md:mt-28 md:px-12">
        <div className="border-t border-line pt-10">
          <p className="max-w-4xl font-serif text-2xl leading-snug text-[#191919] md:text-3xl lg:text-4xl">
            {HERO.intro}
          </p>
        </div>
      </div>
    </section>
  );
};
