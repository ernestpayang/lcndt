import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

/**
 * Observe l'élément et ajoute `.is-visible` quand il entre dans le viewport.
 * Respecte `prefers-reduced-motion` : visible immédiatement, sans observer.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}


export const K = ({ children }: { children: string }) => (
  <p className="k">
    <i />
    {children}
  </p>
);

type BProps = {
  /** Destination interne (navigation SPA via react-router). */
  to?: string;
  /** Destination externe (rechargement de page volontaire). */
  href?: string;
  children: ReactNode;
  s?: boolean;
};

export const B = ({ to, href, children, s = false }: BProps) => {
  const className = `btn ${s ? 'second' : ''}`;
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};
