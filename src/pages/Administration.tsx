import { K, B } from '../shared/ui';
import { LeadershipSection } from '../components/ProfessionalSections';
import { PageHero } from '../components/PageHero';
import { adminStaff, schoolSupportStaff } from '../data/site';

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
        <h1>Notre Administration, engagée et soudée</h1>
        <p className="inner-lead">
          Une équipe composée de personnes qualifiées veille à offrir aux enseignants tout ce dont
          ils ont besoin pour transmettre le savoir à vos enfants. Elle se tient aussi prête à
          accueillir les élèves et à leur offrir un cadre idéal pour leur apprentissage.
        </p>
      </div>

      <section className="shell staff-block centered-block">
        <div className="section-head centered-head">
          <K>Le corps enseignant</K>
          <h2>Des enseignants engagés au service de la réussite</h2>
        </div>
        <p className="staff-summary">
          L’équipe pédagogique est composée de 18 enseignants en 2026 dont 12 hommes, 4 femmes et
          2 sœurs. Elle accompagne chaque élève avec sérieux, rigueur et attention aux besoins de
          chacun.
        </p>
        <div className="action-row">
          <B to="/contact">Nous contacter</B>
        </div>
      </section>

      <section className="shell staff-block">
        <div className="section-head">
          <K>Le corps administratif</K>
          <h2>Des responsables engagés au cœur de l’établissement</h2>
        </div>

        <div className="admin-grid staff-grid">
          {adminStaff.map((member) => (
            <article key={member.name} className="staff-card">
              <img src={member.image} alt={member.name} />
              <div className="staff-info">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell staff-block">
        <div className="section-head">
          <K>Le corps de la scolarité</K>
          <h2>Une équipe attentive au suivi des élèves</h2>
        </div>

        <div className="scolarite-grid staff-grid">
          {schoolSupportStaff.map((member) => (
            <article key={member.name} className="staff-card">
              <img src={member.image} alt={member.name} />
              <div className="staff-info">
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
