import { useEffect, useRef } from "react";

export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
