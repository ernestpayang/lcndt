import { school, staff } from '../data/site';

/*const WhatsApp = () => (
  <a className="pro-cta" href={school.whatsapp} target="_blank" rel="noreferrer">
    Écrire sur WhatsApp
  </a>
);*/

/** Accueil — « Pourquoi le LCNDT » */
export function WhyLcndt() {
  return (
    <section className="pro shell">
      <div className="pro-heading">
        <p className="k">
          <i />
          Pourquoi le LCNDT
        </p>
        <h2>Grandir dans la foi, apprendre avec ambition.</h2>
        <p>
          Un accompagnement attentif, des enseignants engagés et une communauté éducative au service
          de la réussite de chaque élève.
        </p>
      </div>
      <div className="pro-grid">
        <article>
          <strong>Accompagnement</strong>
          <span>Suivi pédagogique et dialogue régulier avec les familles.</span>
        </article>
        <article>
          <strong>Vie communautaire</strong>
          <span>Temps de prière, service et activités de fraternité.</span>
        </article>
        <article>
          <strong>Ouverture</strong>
          <span>Clubs, culture, sport et projets citoyens.</span>
        </article>
      </div>
    </section>
  );
}

/** Administration — équipe de direction (données centralisées dans src/data) */
export function LeadershipSection() {
  return (
    <section className="pro shell">
      <p className="k">
        <i />
        Équipe de direction
      </p>
      <h2>Des responsables au service des élèves.</h2>
      <div className="team-grid">
        {staff.map(({ name, role }) => (
          <article key={name}>
            <div className="avatar">
              {name
                .split(' ')
                .map((x) => x[0])
                .join('')}
            </div>
            <strong>{name}</strong>
            <span>{role}</span>
            <p>Disponible pour accompagner les élèves et leurs familles.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Vie du Lycée — vie scolaire */
export function SchoolLifeSection() {
  return (
    <section className="pro shell">
      <p className="k">
        <i />
        Vie scolaire
      </p>
      <h2>Apprendre aussi en dehors de la classe.</h2>
      <div className="pro-grid">
        <article>
          <strong>Club débat</strong>
          <span>Prendre la parole, argumenter et écouter.</span>
        </article>
        <article>
          <strong>Sport & culture</strong>
          <span>Développer l’esprit d’équipe et les talents.</span>
        </article>
        <article>
          <strong>Solidarité</strong>
          <span>Mettre en pratique le service des autres.</span>
        </article>
      </div>
    </section>
  );
}

/** Admission — parcours d'inscription */
export function AdmissionSteps() {
  return (
    <section className="pro shell">
      <p className="k">
        <i />
        Parcours d’inscription
      </p>
      <h2>Trois étapes pour rejoindre le LCNDT.</h2>
      <div className="timeline">
        <article>
          <b>01</b>
          <strong>Préparer le dossier</strong>
          <span>Réunir toutes les pièces demandées avant le test.</span>
        </article>
        <article>
          <b>02</b>
          <strong>Passer le test</strong>
          <span>Le 15 septembre 2026.</span>
        </article>
        <article>
          <b>03</b>
          <strong>Finaliser l’inscription</strong>
          <span>Avant le 20 septembre 2026.</span>
        </article>
      </div>
      {/* <WhatsApp /> */}
    </section>
  );
}

/** Contact — nous trouver */
export function FindUsSection() {
  return (
    <section className="pro shell">
      <p className="k">
        <i />
        Nous trouver
      </p>
      <h2>Une équipe disponible pour vous accueillir.</h2>
      <div className="contact-tools">
        <iframe title="Carte vers le LCNDT" src={school.mapEmbed} loading="lazy" />
        <div>
          <strong>Besoin d’une réponse rapide ?</strong>
          <p>
            Contactez le secrétariat pendant les heures d’ouverture ou écrivez-nous sur WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
