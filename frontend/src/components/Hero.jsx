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
      className="relative overflow-hidden bg-white px-6 pb-20 pt-28 text-ink md:px-10 lg:px-16"
    >
      <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyanBrand/20 blur-3xl" />
      <div className="absolute bottom-[-140px] left-[-120px] h-80 w-80 rounded-full bg-aquaDark/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-softAqua px-4 py-2 text-sm font-medium text-aquaDark">
            <Sparkles size={16} />
            {PROFILE.location}
          </div>

          <h1 className="brand-logo text-[4.2rem] font-bold leading-[0.86] tracking-tight text-aquaDark sm:text-[5.8rem] lg:text-[7.4rem]">
            Martina
            <br />
            Arciello
          </h1>

          <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-ink md:text-3xl">
            Social Media Manager, Content Creator & Storytelling lover.
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-stone md:text-lg">
            {HERO.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollTo("#progetti")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-aquaDark px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-cyanBrand"
            >
              Guarda i miei progetti
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("#contatti")}
              className="inline-flex items-center justify-center rounded-full border border-aquaDark px-8 py-4 text-sm font-semibold text-aquaDark transition-colors duration-300 hover:bg-aquaDark hover:text-white"
            >
              Contattami
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-6 -top-6 h-full w-full rounded-[2rem] bg-cyanBrand" />
          <div className="absolute -bottom-6 -left-6 h-full w-full rounded-[2rem] bg-aquaDark" />

          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-2xl">
            <img
              src="/images/martina.jpg"
              alt="Martina Arciello"
              className="h-[520px] w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-8 right-6 rounded-3xl bg-white px-6 py-5 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanBrand">
              Based in
            </p>
            <p className="font-display text-3xl text-aquaDark">Napoli</p>
          </div>
        </div>
      </div>
    </section>
  );
};
