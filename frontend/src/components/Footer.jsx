import { Mail, Instagram, Linkedin } from "lucide-react";
import { PROFILE } from "../data/content.js";

export const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-serif text-3xl md:text-4xl text-bone">
              {PROFILE.name}<span className="text-clay">.</span>
            </p>
            <p className="mt-2 text-sm text-white/55">{PROFILE.role}</p>
            <p className="text-sm text-white/40">{PROFILE.location}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              data-testid="footer-email"
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 hover:bg-clay hover:border-clay transition-colors duration-300"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
            <a
              data-testid="footer-instagram"
              href={PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 hover:bg-clay hover:border-clay transition-colors duration-300"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              data-testid="footer-linkedin"
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 hover:bg-clay hover:border-clay transition-colors duration-300"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {PROFILE.name}. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-white/40">Made with care · Napoli, IT</p>
        </div>
      </div>
    </footer>
  );
};
