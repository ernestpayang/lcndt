import { LifeHero } from '../components/sections/LifeHero';
import { ProgramsTabs } from '../components/sections/ProgramsTabs';
import { QuickFacts } from '../components/sections/QuickFacts';
import { DailySchedule } from '../components/sections/DailySchedule';
import { ClubsGrid } from '../components/sections/ClubsGrid';
import { PhotoGallery } from '../components/sections/PhotoGallery';
import { StaffCards } from '../components/sections/StaffCards';
import { FAQ } from '../components/sections/FAQ';
import { SchoolLifeSection } from '../components/ProfessionalSections';
import { school } from '../data/site';

export default function VieDuLycee() {
  return (
    <main>
      <LifeHero school={school.name} />
      <ProgramsTabs />
      <DailySchedule />
      <ClubsGrid />
      <PhotoGallery />
      <StaffCards />
      <FAQ />
      <SchoolLifeSection />
    </main>
  );
}
