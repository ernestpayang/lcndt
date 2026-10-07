import { Link } from 'react-router-dom';
import { K, B } from '../shared/ui';
import { LeadershipSection } from '../components/ProfessionalSections';
import { PageHero } from '../components/PageHero';
import { staff } from '../data/site';

export default function Administration() {
  return (
    <main className="inner">
      <PageHero
        image="/images/hero.jpg"
        kicker="Administration"
        title="Administration"
        lead="Établissement catholique sous la tutelle du Diocèse de Moundou, avec une direction engagée au service des élèves, de la qualité académique et des valeurs chrétiennes."
      />
      <div className="shell">
        <h1>Administration</h1>
        <p className="inner-lead">
          Établissement catholique sous la tutelle du Diocèse de Moundou, avec une direction
          engagée au service des élèves, de la qualité académique et des valeurs chrétiennes.
        </p>
      </div>

      <section className="shell teachers-section">
        <div className="teachers-copy">
          <K>Le corps Administratif </K>
          <h2>Des enseignants engagés au service de la réussite</h2>
          <p>
            L’équipe pédagogique accompagne chaque élève avec sérieux, rigueur et attention aux
            besoins de chacun.
          </p>
          <B to="/contact">Nous contacter</B>
        </div>

        <div className="teacher-grid">
          {staff.map((member) => (
            <article key={member.name} className="teacher-card">
              <img src="/images/gallery-bibliotheque.jpg" alt={member.name} />
              <div className="teacher-info">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <LeadershipSection />
    </main>
  );
}
