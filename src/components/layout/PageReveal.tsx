import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Sections révélées en fondu-remontée au défilement. */
const SECTION_SELECTOR = 'main > section, main.inner > .shell > *';
/** Enfants de grilles animés en cascade via `--d` (délai). */
const GRID_CHILD_SELECTOR = [
  '.pro-grid > *',
  '.team-grid > *',
  '.value-grid > *',
  '.official-grid > *',
  '.statistics-grid > *',
  '.statistics-indicators > *',
  '.photo-gallery > *',
  '.featured-grid > *',
  '.cards-row > *',
  '.faq-list > *',
].join(', ');

const STAGGER_STEP_MS = 70;
const MAX_STAGGER_MS = 560;

/**
 * Ajoute `.reveal` aux sections de la page courante et `.reveal-item`
 * aux cartes des grilles, puis bascule `.is-visible` via IntersectionObserver.
 * Relancé à chaque changement de route. Inactif si `prefers-reduced-motion`.
 */
export function PageReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
    const headers = Array.from(
      document.querySelectorAll<HTMLElement>('main.inner > .shell > *:not(section)'),
    );
    if (sections.length === 0 && headers.length === 0) return;

    // Petite cascade sur l'en-tête des pages intérieures (fil d'Ariane, titre…).
    headers.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--d', `${Math.min(i, 6) * 60}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    sections.forEach((section) => {
      section.classList.add('reveal');
      section.querySelectorAll<HTMLElement>(GRID_CHILD_SELECTOR).forEach((child, j) => {
        child.classList.add('reveal-item');
        child.style.setProperty('--d', `${Math.min(j * STAGGER_STEP_MS, MAX_STAGGER_MS)}ms`);
      });
      observer.observe(section);
    });
    headers.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
