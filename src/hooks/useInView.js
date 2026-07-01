import { useState, useEffect, useRef } from 'react';

export function useInView(threshold = 0.05, fallbackMs = 700) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const timer = setTimeout(() => setInView(true), fallbackMs);
    if (!el) { clearTimeout(timer); return; }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          clearTimeout(timer);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(timer); };
  }, [threshold, fallbackMs]);

  return [ref, inView];
}
