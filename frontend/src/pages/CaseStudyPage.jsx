import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Target, User, ListChecks, Image, TrendingUp, Lightbulb } from "lucide-react";
import { PROJECTS, PROFILE } from "../data/content";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!project) navigate("/");
  }, [project, navigate]);

  if (!project) return null;

  const otherProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div data-testid="case-study-page" className="bg-bone">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <article className="max-w-5xl mx-auto px-6 md:px-12">
          <Link
            to="/#progetti"
            data-testid="back-to-projects"
            className="inline-flex items-center gap-2 text-sm text-stone hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={16} strokeWidth={1.5} /> Torna ai progetti
          </Link>

          <header className="mt-8">
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-clay">
              {project.category}
            </span>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl tracking-tight text-ink leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl font-light text-stone leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </header>

          <div className="mt-10 rounded-[2rem] overflow-hidden border border-line shadow-xl shadow-black/5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 md:h-[460px] object-cover"
            />
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-12">
            <Block icon={<Target size={20} strokeWidth={1.5} />} title="Goal">
              <p className="text-base font-light text-stone leading-relaxed">{project.goal}</p>
            </Block>
            <Block icon={<User size={20} strokeWidth={1.5} />} title="My role">
              <p className="text-base font-light text-stone leading-relaxed">{project.myRole}</p>
            </Block>
          </div>

          <div className="mt-12">
            <Block icon={<ListChecks size={20} strokeWidth={1.5} />} title="Process">
              <ol className="mt-2 space-y-3">
                {project.process.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="font-serif text-clay text-xl leading-none mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-light text-stone leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </Block>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12">
            <Block icon={<Image size={20} strokeWidth={1.5} />} title="Content examples">
              <div className="rounded-2xl border border-dashed border-line bg-sand/60 px-5 py-6">
                <p className="text-base font-light text-stone italic">{project.contentExamples}</p>
              </div>
            </Block>
            <Block icon={<TrendingUp size={20} strokeWidth={1.5} />} title="Results & impact">
              <ul className="space-y-3">
                {project.results.map((r, i) => (
                  <li
                    key={i}
                    className="rounded-2xl border border-dashed border-line bg-sand/60 px-5 py-4 text-base font-light text-stone italic"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <div className="mt-12 mb-4">
            <Block icon={<Lightbulb size={20} strokeWidth={1.5} />} title="Key learnings">
              <p className="font-serif text-2xl md:text-3xl text-ink leading-snug">
                {project.learnings}
              </p>
            </Block>
          </div>

          <div className="mt-16 rounded-[2rem] bg-ink p-10 md:p-14 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-bone">
              Ti piace questo approccio?
            </h2>
            <p className="mt-4 text-base font-light text-white/60 max-w-md mx-auto">
              Parliamone. Scrivimi per collaborazioni, progetti social o campagne digitali.
            </p>
            <a
              data-testid="case-study-cta"
              href={`mailto:${PROFILE.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-clay text-white px-8 py-4 text-sm hover:opacity-90 transition-opacity duration-300"
            >
              Contattami <ArrowUpRight size={18} strokeWidth={1.5} />
            </a>
          </div>
        </article>

        <section className="max-w-5xl mx-auto px-6 md:px-12 mt-20 mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-ink mb-8">Altri progetti</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/progetto/${p.slug}`}
                data-testid={`related-project-${p.slug}`}
                className="group rounded-3xl border border-line bg-surface overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-[0.15em] text-clay">{p.category}</span>
                  <h4 className="mt-2 font-serif text-2xl text-ink">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const Block = ({ icon, title, children }) => (
  <div>
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sand text-clay">
        {icon}
      </span>
      <h2 className="font-serif text-2xl md:text-3xl text-ink">{title}</h2>
    </div>
    {children}
  </div>
);
