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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-bone/70 border-b border-line/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          onClick={(e) => handleNav(e, "#top")}
          className="font-serif text-2xl md:text-3xl tracking-tight text-ink"
        >
          Martina<span className="text-clay">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-testid={`nav-link-${link.href.replace("#", "")}`}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm text-stone hover:text-ink transition-colors duration-300"
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
          className="hidden md:inline-flex items-center rounded-full bg-ink text-bone text-sm px-6 py-3 hover:bg-clay transition-colors duration-300"
        >
          Contattami
        </a>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </nav>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden backdrop-blur-2xl bg-bone/95 border-t border-line/60 px-6 py-6"
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="text-lg text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex rounded-full bg-clay text-white text-sm px-6 py-3"
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
