import { LifeHero } from '../components/sections/LifeHero';
import { ClubsGrid } from '../components/sections/ClubsGrid';
import { PhotoGallery } from '../components/sections/PhotoGallery';
import { FAQ } from '../components/sections/FAQ';
import { SchoolLifeSection } from '../components/ProfessionalSections';
import { PageHero } from '../components/PageHero';
import { school } from '../data/site';

export default function VieDuLycee() {
  return (
    <main>
      <PageHero
        image="/images/gallery-sport.jpg"
        kicker="Vie du lycée"
        title="Vie du lycée"
        lead="Un cadre de vie structurant, des activités variées et une communauté engagée au service de l’excellence scolaire et de la formation humaine."
      />
      <LifeHero school={school.name} />
      <ClubsGrid />
      <SchoolLifeSection />
      <PhotoGallery />
      <FAQ />
    </main>
  );
}
