import { K, B } from '../shared/ui';
import { loadNews, getPublishedArticles } from '../data/news';
import { school } from '../data/site';

const schoolStats = [
  { value: '411', label: 'élèves', note: '301 filles / 110 garçons' },
  { value: '80–95%', label: 'admission', note: 'Taux d’admission en classe supérieure' },
  { value: '90–100%', label: 'réussite', note: 'Aux examens et concours' },
  { value: '50+', label: 'ans', note: 'D’existence depuis 1966' },
];

const courseCards = [
  {
    title: 'Collège / 6e-3e',
    text: 'Un cadre scolaire rigoureux pour développer la curiosité, la discipline et la réussite.',
    image: '/images/gallery-classe.jpg',
  },
  {
    title: 'Second cycle',
    text: 'Des parcours d’excellence avec accompagnement pédagogique et préparation aux examens.',
    image: '/images/gallery-sport.jpg',
  },
  {
    title: 'Culture & sport',
    text: 'Des activités variées pour éveiller les talents, le goût du travail et l’esprit d’équipe.',
    image: '/images/gallery-foret.jpg',
  },
];

const teacherCards = [
  { name: 'Prof. L. Mbaimoundou', role: 'Mathématiques', image: '/images/gallery-bibliotheque.jpg' },
  { name: 'Prof. A. Ngaradoum', role: 'Sciences', image: '/images/gallery-classe.jpg' },
  { name: 'Prof. F. Nako', role: 'Français', image: '/images/gallery-sport.jpg' },
  { name: 'Prof. J. Djoum', role: 'Civique', image: '/images/activities.jpg' },
];

const publicationCards = [
  { title: 'Le LCNDT en chiffres', text: 'Une école stable, exigeante et tournée vers la réussite.' },
  { title: 'Nous former pour demain', text: 'La formation des filles et des garçons au service du pays.' },
  { title: 'Une communauté engagée', text: 'Anciens et nouveaux élèves unis autour de l’établissement.' },
];

const valueCards = [
  {
    title: 'Éducation catholique',
    text: 'La foi, le respect et le service éclairent la vie quotidienne.',
  },
  {
    title: 'Bibliothèque',
    text: 'Un espace calme pour lire, rechercher et approfondir.',
  },
  {
    title: 'Du matin au soir',
    text: 'Des horaires structurés et un accompagnement régulier.',
  },
];

export default function Home() {
  const newsCards = getPublishedArticles(loadNews()).slice(0, 3).map((item) => ({
    title: item.title,
    text: item.excerpt,
    image: item.image || '/images/hero.jpg',
  }));
  return (
    <main className="home-template">
      <section className="template-hero">
        <div className="hero-image-wrap">
          <img src="/images/hero.jpg" alt="Campus du lycée" />
        </div>
        <div className="shell template-hero-inner">
          <div className="hero-copy-box">
            <K>Notre école</K>
            <h1>Lycée Collège Notre Dame du Tchad</h1>
            <p>
              {school.name} à Moundou, fondé en 1966, accompagne les jeunes dans l’excellence,
              la discipline et les valeurs humaines et chrétiennes.
            </p>
            <div className="hero-actions">
              <B to="/vie-du-lycee">Découvrir le lycée</B>
              <B to="/admission" s>
                Admission
              </B>
            </div>
          </div>

          <aside className="event-panel mission-panel">
            <h3>Notre mission catholique</h3>
            <p>
              Accueillir chacun comme une personne unique, éveiller le goût de la vérité et faire
              grandir une communauté fraternelle où foi, culture et raison dialoguent.
            </p>
          </aside>
        </div>
      </section>

      <section className="shell about-section">
        <div className="about-copy">
          <K>A propos de nous </K>
          <h2>Une école de référence à Moundou</h2>
          <p>
            Fondé en 1966 dans le diocèse de Moundou, le LCNDT est un établissement catholique
            reconnu par le Ministère de l’Éducation Nationale. Son histoire illustre un engagement
            durable au service des jeunes, de l’excellence et de l’éducation des femmes.
          </p>
          <p>
            Plus de 50 ans après sa création, l’école continue de former des élèves solidement
            encadrés, disciplinés et ouverts sur le monde.
          </p>
          <B to="/contact">Nous contacter</B>
        </div>

        <div className="about-side-panel">
          <h3>Chiffres clés</h3>
          {schoolStats.slice(0, 3).map((stat) => (
            <div key={stat.label} className="mini-event">
              <span>{stat.value}</span>
              <div>
                <strong>{stat.label}</strong>
                <small>{stat.note}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell values-strip">
        <div className="value-items-grid">
          {valueCards.map((item) => (
            <article key={item.title} className="value-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="shell cta-row">
        <a href="/admission" className="cta-card primary">
          <span>Admission au Lycée</span>
          <strong>Inscription 2026</strong>
        </a>
        <a href="/vie-du-lycee" className="cta-card secondary">
          <span>Découvrirle Lycée</span>
          <strong>Vie du lycée</strong>
        </a>
      </div>

      <section className="shell courses-section">
        <div className="section-head">
          <K>Nos parcours</K>
          <h2>Des parcours qui préparent l’avenir</h2>
        </div>

        <div className="course-grid">
          {courseCards.map((course) => (
            <article key={course.title} className="course-card">
              <img src={course.image} alt={course.title} />
              <div className="course-body">
                <h3>{course.title}</h3>
                <p>{course.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="publications-band">
        <div className="shell publications-inner">
          <K>Publications</K>
          <h2>Un établissement au cœur des valeurs éducatives</h2>

          <div className="publication-grid">
            {publicationCards.map((item) => (
              <article key={item.title} className="publication-card">
                <div className="publication-figure" aria-hidden="true">
                  <span>LCNDT</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell news-section">
        <div className="section-head">
          <K>Les dernières actualités</K>
          <h2>Les dernières actualités du lycée</h2>
        </div>

        <div className="news-grid">
          {newsCards.map((item) => (
            <article key={item.title} className="news-card">
              <img src={item.image} alt={item.title} />
              <div className="news-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
