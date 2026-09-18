import { K, B } from '../shared/ui';
import { Statistics } from '../components/Statistics';
import { WhyLcndt } from '../components/ProfessionalSections';
import { OverviewSection } from '../components/OfficialDetails';
import { school } from '../data/site';

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="shell heroGrid">
          <div className="hero-copy">
            <h1>LCNDT — pédagogie et organisation claires</h1>
            <p className="hero-lead">
              {school.name}. Cours structurés, encadrement permanent et informations pratiques pour
              les familles à Moundou.
            </p>
            <div className="hero-actions">
              <B to="/vie-du-lycee">Découvrir le lycée</B>
              <B to="/admission" s>
                Admission
              </B>
            </div>
          </div>

          <div className="heroImg">
            <img
              src="/images/hero.jpg"
              alt="Campus du lycée"
              width={1536}
              height={1024}
              decoding="async"
              fetchPriority="high"
            />
            <aside>
              <K>Repère officiel</K>
              <strong>
                Informations vérifiées par l’administration — horaires, contacts et services.
              </strong>
            </aside>
          </div>
        </div>
      </section>

      <Statistics />

      <WhyLcndt />

      <OverviewSection />
    </main>
  );
}
