import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data/content";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line/60 bg-bone/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link
          to="/"
          data-testid="nav-logo"
          onClick={(e) => handleNav(e, "#home")}
          className="flex items-center gap-3 text-[#191919] transition-colors duration-300 hover:text-[#0097B2]"
        >
          <img
            src="/images/logo.png"
            alt="Logo Martina Arciello"
            className="h-8 w-8 object-contain"
          />

          <span className="font-serif text-2xl tracking-tight md:text-3xl">
            Martina<span className="text-[#0097B2]">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-testid={`nav-link-${link.href.replace("#", "")}`}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm text-stone transition-colors duration-300 hover:text-[#0097B2]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contatti"
          data-testid="nav-cta"
          onClick={(e) => handleNav(e, "#contatti")}
          className="hidden items-center rounded-full bg-[#365E67] px-6 py-3 text-sm text-white transition-colors duration-300 hover:bg-[#0097B2] md:inline-flex"
        >
          Contattami
        </a>

        <button
          data-testid="nav-mobile-toggle"
          className="text-[#191919] transition-colors duration-300 hover:text-[#0097B2] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </nav>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="border-t border-line/60 bg-bone/95 px-6 py-6 backdrop-blur-2xl md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="text-lg text-[#191919] transition-colors duration-300 hover:text-[#0097B2]"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex rounded-full bg-[#365E67] px-6 py-3 text-sm text-white transition-colors duration-300 hover:bg-[#0097B2]"
              >
                Contattami
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
