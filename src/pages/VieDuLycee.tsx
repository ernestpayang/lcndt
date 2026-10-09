import { useEffect, useState } from 'react';
import { LifeHero } from '../components/sections/LifeHero';
import { ClubsGrid } from '../components/sections/ClubsGrid';
import { PhotoGallery } from '../components/sections/PhotoGallery';
import { FAQ } from '../components/sections/FAQ';
import { SchoolLifeSection } from '../components/ProfessionalSections';
import { school } from '../data/site';

const lifeGallery = [
  '/images/gallery-classe.jpg',
  '/images/gallery-sport.jpg',
  '/images/gallery-bibliotheque.jpg',
  '/images/gallery-foret.jpg',
];

export default function VieDuLycee() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + lifeGallery.length) % lifeGallery.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % lifeGallery.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % lifeGallery.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="vie-lycee-hero">
        <div className="shell">
          <div className="vie-lycee-carousel" aria-label="Carrousel de la vie du lycée">
            <button
              type="button"
              className="vie-lycee-arrow prev"
              onClick={goToPrevious}
              aria-label="Image précédente"
            >
              ‹
            </button>

            <img
              key={lifeGallery[activeIndex]}
              src={lifeGallery[activeIndex]}
              alt={`Photo de la vie du lycée ${activeIndex + 1}`}
            />

            <button
              type="button"
              className="vie-lycee-arrow next"
              onClick={goToNext}
              aria-label="Image suivante"
            >
              ›
            </button>
          </div>

          <div className="vie-lycee-intro">
          
            <h2>
              Un cadre d'études structuré, une équipe engagé pour offre une éducation de qualité à une communauté scolaire soudée.
            </h2>
          </div>
        </div>
      </section>

      <LifeHero school={school.name} />
      <ClubsGrid />
      <SchoolLifeSection />
      <PhotoGallery />
      <FAQ />
    </main>
  );
}
