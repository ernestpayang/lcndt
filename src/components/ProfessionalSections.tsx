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
          Valeurs et engagement
        </p>
        <h2>50 ans au service de l’épanouissement des hommes et des femmes.</h2>
        <p>
          Fondé en 1966, le LCNDT a consacré plus d’un demi-siècle à la formation des jeunes, à la
          discipline, à l’excellence et aux valeurs humaines et chrétiennes.
        </p>
      </div>
      <div className="pro-grid">
        <article>
          <strong>Éducation de qualité</strong>
          <span>Des résultats constants : 80 % à 95 % d’admission en classe supérieure et 90 % à 100 % de réussite aux examens.</span>
        </article>
        <article>
          <strong>Discipline & excellence</strong>
          <span>Un encadrement rigoureux, un suivi attentif des élèves et un esprit d’effort au service de la réussite.</span>
        </article>
        <article>
          <strong>Développement du pays</strong>
          <span>Une option préférentielle pour l’instruction et l’éducation des femmes, au service de l’Église et du développement national.</span>
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
        Tutelle & direction
      </p>
      <div className="official-grid" style={{ marginTop: '2rem' }}>
        <article>
          <strong>Tutelle</strong>
          <p>
            Diocèse de Moundou, sous l’autorité de Mgr Joachim Kouraleyo Tarounga, Évêque de
            Moundou.
          </p>
        </article>
        <article>
          <strong>Partenaires institutionnels</strong>
          <p>
            Ministère de l’Éducation Nationale, Association des Parents d’Élèves (APE) et
            Congrégation des Sœurs Oblates de Sainte Thérèse de l’Enfant Jésus.
          </p>
        </article>
        <article>
          <strong>Mission</strong>
          <p>
            Former les jeunes dans la foi, la discipline, la qualité académique et l’engagement au
            service du pays.
          </p>
        </article>
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
        Vie de campus
      </p>
      <h2>Une communauté scolaire soudée, disciplinée et tournée vers l’avenir.</h2>
      <p>
        Au Lycée-Collège Notre-Dame du Tchad, la vie scolaire ne se limite pas aux salles de
        classe. Chaque journée est l’occasion de vivre une expérience éducative fondée sur le
        partage, le respect, la responsabilité et la solidarité.
      </p>
      <div className="pro-grid" style={{ marginTop: '1.4rem' }}>
        <article>
          <strong>Une communauté soudée</strong>
          <span>
            Le campus est un lieu de rencontre où élèves, enseignants, personnels et familles
            partagent une même ambition : favoriser la réussite et l’épanouissement de la jeunesse.
            Le dialogue, l’écoute et le respect créent un climat favorable aux apprentissages.
          </span>
        </article>
        <article>
          <strong>La discipline comme valeur éducative</strong>
          <span>
            La discipline aide les élèves à grandir dans la responsabilité. Respect des horaires,
            soin des infrastructures, tenue et comportement appropriés, ainsi que l’écoute et le
            respect des autres participent à la formation du citoyen de demain.
          </span>
        </article>
        <article>
          <strong>Une vie scolaire riche et dynamique</strong>
          <span>
            À travers les activités culturelles, sportives, religieuses et collectives, les jeunes
            développent leurs talents, leur confiance en eux et leur capacité à collaborer avec les
            autres.
          </span>
        </article>
      </div>
      <p style={{ marginTop: '1.4rem' }}>
        L’établissement accueille des jeunes issus d’horizons différents et les encourage à
        développer des valeurs de respect, de tolérance, de fraternité et de solidarité. L’objectif
        est clair : préparer les élèves à vivre dans une société diverse, dialoguer avec les autres
        et se préparer à l’avenir avec sérieux et engagement.
      </p>
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
