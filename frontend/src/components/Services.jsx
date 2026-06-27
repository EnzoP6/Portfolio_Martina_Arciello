import { SERVICES } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export const Services = () => {
  return (
    <section id="servizi" data-testid="services-section" className="py-20 md:py-28 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-clay">
            Servizi
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-tight text-bone">
            Come posso aiutarti
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      data-testid={`service-card-${index}`}
      className="reveal group rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500"
    >
      <span className="font-serif text-3xl text-clay/70 group-hover:text-clay transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 font-serif text-2xl text-bone">{service.title}</h3>
      <p className="mt-3 text-sm font-light text-white/55 leading-relaxed">
        {service.desc}
      </p>
    </div>
  );
};
