import { school } from '../data/site';

/** Accueil — « Le LCNDT en bref » */
export function OverviewSection() {
  return (
    <section className="official shell">
      <h2>Le LCNDT en bref</h2>
      <div className="official-grid">
        <article>
          <strong>Fondé en 1966</strong>
          <p>
            Fondé sous la direction de Sœur Thérèse CADORET, le lycée s’inscrit dans la mission
            éducative catholique à Moundou.
          </p>
        </article>
        <article>
          <strong>Foi, travail, réussite.</strong>
          <p>
            Notre mission : offrir un enseignement de qualité aux jeunes tout en renforçant leur foi
            chrétienne.
          </p>
        </article>
        <article>
          <strong>Parcours et langues</strong>
          <p>
            De la 6e d’accueil à la Terminale. Séries A4, C et D. Enseignement en français et en
            anglais.
          </p>
        </article>
      </div>
    </section>
  );
}

/** Admission — détails officiels 2026/2027 */
export function AdmissionDetails() {
  return (
    <section className="official shell">
      <h2>Admissions 2026/2027</h2>
      <div className="official-grid">
        <article>
          <strong>Dates importantes</strong>
          <p>
            Test : 15 septembre
            <br />
            Clôture des inscriptions : 20 septembre
            <br />
            Rentrée : 25 septembre
          </p>
        </article>
        <article>
          <strong>Frais d’inscription</strong>
          <p>100 000 F CFA, auxquels s’ajoutent 4 000 F CFA pour les copies des épreuves.</p>
        </article>
        <article>
          <strong>Pièces à fournir</strong>
          <p>
            Lettre d’appartenance à une église, bulletin du dernier trimestre, 2 photos 4×4 et copie
            d’acte de naissance.
          </p>
        </article>
      </div>
    </section>
  );
}

/** Contact — coordonnées complètes */
export function ContactCoordinates() {
  return (
    <section className="official contact-coordinates">
      <h2>Coordonnées</h2>
      <p>
        {school.address}
        <br />
        <a href={school.phoneHref}>{school.phoneDisplay}</a>
        <br />
        <a href={school.emailHref}>{school.email}</a>
        <br />
        {school.hours}
      </p>
      <a className="btn second" href={school.facebook} target="_blank" rel="noreferrer">
        Notre page Facebook
      </a>
    </section>
  );
}
