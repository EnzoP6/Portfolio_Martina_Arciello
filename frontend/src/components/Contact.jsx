import { Mail, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/content.js";
import { useReveal } from "../hooks/useReveal.js";

export const Contact = () => {
  const ref = useReveal();
  return (
    <section id="contatti" data-testid="contact-section" className="py-20 md:py-32 bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="reveal text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-clay">
            Contatti
          </span>
          <h2 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-ink leading-[1.05]">
            Vuoi lavorare <span className="italic text-clay">con me?</span>
          </h2>
          <p className="mt-8 text-base md:text-lg font-light text-stone leading-relaxed max-w-xl mx-auto">
            Scrivimi per collaborazioni, progetti social, contenuti UGC, gestione profili o
            campagne digitali.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <ContactButton
            testid="contact-email"
            href={`mailto:${PROFILE.email}`}
            icon={<Mail size={20} strokeWidth={1.5} />}
            label="Email"
            value={PROFILE.email}
          />
          <ContactButton
            testid="contact-instagram"
            href={PROFILE.instagramUrl}
            icon={<Instagram size={20} strokeWidth={1.5} />}
            label="Instagram"
            value={PROFILE.instagram}
          />
          <ContactButton
            testid="contact-linkedin"
            href={PROFILE.linkedin}
            icon={<Linkedin size={20} strokeWidth={1.5} />}
            label="LinkedIn"
            value="Martina Arciello"
          />
        </div>
      </div>
    </section>
  );
};

const ContactButton = ({ testid, href, icon, label, value }) => {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      data-testid={testid}
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="group rounded-3xl border border-line bg-surface p-7 text-left hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-sand text-ink group-hover:bg-clay group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
        <ArrowUpRight
          size={18}
          strokeWidth={1.5}
          className="text-stone group-hover:text-clay transition-colors duration-300"
        />
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.15em] text-stone">{label}</p>
      <p className="mt-1 text-base font-medium text-ink break-words">{value}</p>
    </a>
  );
};
