import { school } from '../data/site';

/** Accueil — « Notre histoire » */
export function OverviewSection() {
  return (
    <section className="official shell">
      <h2>Notre histoire</h2>
      <div className="official-grid">
        <article>
          <strong>1966 : fondation</strong>
          <p>
            Créé en 1966 avec 40 filles, le collège est confié aux Sœurs Oblates de Sainte
            Thérèse de l’Enfant Jésus. Sa fondatrice et première directrice est Sœur Thérèse
            Cadoret.
          </p>
        </article>
        <article>
          <strong>Un rêve devenu réalité</strong>
          <p>
            Aujourd’hui, les anciennes et anciens élèves du LCNDT occupent des postes de cadres dans
            de nombreux secteurs publics, parapublics et privés du pays.
          </p>
        </article>
        <article>
          <strong>Cinquantenaire</strong>
          <p>
            En décembre 2016, l’établissement célèbre son cinquantième anniversaire à Moundou, dans
            une grande fête de mémoire, de gratitude et d’espérance.
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
          <p>Lycée : 100 000 F CFA, auxquels s’ajoutent 4 000 F CFA pour les copies des épreuves.</p>
          <p>Collège : 85 000 F CFA, auxquels s’ajoutent 4 000 F CFA pour les copies des épreuves.</p>
        </article>
        <article>
          <strong>Pièces à fournir</strong>
          <p>
            Une copie d'acte de naissance, une copie du bulletin du dernier trimestre et 2 photos 4×4
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
