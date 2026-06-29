import { useEffect, useRef } from "react";

export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fallback = setTimeout(() => {
      el.classList.add("is-visible");
    }, 800);

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      clearTimeout(fallback);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
          clearTimeout(fallback);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
        ...options,
      }
    );

    observer.observe(el);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [options]);

  return ref;
}
