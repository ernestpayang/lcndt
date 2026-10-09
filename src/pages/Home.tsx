import { useState } from 'react';
import { K, B } from '../shared/ui';
import ArticlePreview from '../components/ArticlePreview';
import { loadNews, getPublishedArticles, type NewsItem } from '../data/news';
import { schoolStats, bodyHighlights, courseCards } from '../data/home';
import { school } from '../data/site';

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const newsCards = getPublishedArticles(loadNews()).slice(0, 3);

  return (
    <main className="home-template">
      <ArticlePreview article={selectedArticle} onClose={() => setSelectedArticle(null)} />
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

      <section className="shell about-section with-stats">
        <div className="about-copy">
          <K>Le Lycée </K>
          <h2>Une école de référence à Moundou</h2>
          <p>
            Fondé en 1966 dans le diocèse de Moundou, le LCNDT est un établissement catholique
            reconnu par le Ministère de l’Éducation Nationale. Son histoire illustre un engagement
            durable au service des jeunes, de l’excellence et de l’éducation des jeunes filles et garçons.
          </p>
          <p>
            Plus de 60 ans après sa création, l’école continue de former des élèves solidement
            encadrés, disciplinés et ouverts sur le monde.
          </p>
          <B to="/contact">Nous contacter</B>
        </div>

        <div className="stats-inline-panel" aria-labelledby="stats-title">
          <div className="section-head stats-head">
            <K>Les chiffres clés</K>
            <h2 id="stats-title">Quelques chiffres</h2>
          </div>

          <div className="stats-inline-grid">
            {schoolStats.map((stat) => (
              <article key={stat.label} className="stat-inline-item">
                <div className="stat-inline-value">{stat.value}</div>
                <div className="stat-inline-label">{stat.label}</div>
                <p>{stat.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell body-text-section">
        <div className="mini-highlight-grid">
          {bodyHighlights.map((item) => (
            <article key={item.title} className="mini-highlight-card">
              <span className="mini-highlight-kicker">Valeur</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell value-identity-section">
        <div className="section-head">
          <K>Un établissement au service de la jeunesse</K>
          <h2>Une tradition éducative tournée vers l’avenir</h2>
        </div>

        <div className="identity-intro">
          <p>
            Depuis sa création, le Lycée-Collège Notre-Dame du Tchad s’engage à offrir aux jeunes
            une formation de qualité dans un cadre propice au travail, à l’épanouissement et à la
            responsabilité.
          </p>
          <p>
            Notre ambition est de permettre à chaque élève de développer ses talents, d’acquérir
            des connaissances solides et de construire progressivement son projet d’avenir.
          </p>
        </div>

        <div className="values-strong-grid">
          <article className="value-strong-card">
            <h3>Excellence</h3>
            <p>
              Nous encourageons chaque élève à donner le meilleur de lui-même et à développer le
              goût du travail bien fait.
            </p>
          </article>

          <article className="value-strong-card">
            <h3>Discipline</h3>
            <p>
              Nous considérons la discipline comme un moyen de développer l’autonomie, la
              responsabilité et le respect des autres.
            </p>
          </article>

          <article className="value-strong-card">
            <h3>Fraternité</h3>
            <p>
              Nous cultivons un esprit de solidarité, d’écoute et de respect au sein de toute la
              communauté scolaire.
            </p>
          </article>

          <article className="value-strong-card">
            <h3>Foi</h3>
            <p>
              L’identité catholique de l’établissement nourrit une éducation fondée sur la dignité de
              la personne, le service et l’espérance.
            </p>
          </article>
        </div>
      </section>

      <section className="shell community-section">
        <div className="community-copy">
          <K>Notre communauté scolaire</K>
          <h2> Une communauté soudée, disciplinée et tournée vers l’avenir</h2>

          <p>
            <strong> Le LCNDT est avant tout une communauté.</strong>
          </p>

          <p>
             Élèves, enseignants, éducateurs, personnels administratifs, parents et partenaires
            contribuent ensemble à créer un environnement favorable à l’apprentissage et à
            l’épanouissement des jeunes.
          </p>

          <p>
             Dans cette communauté, chacun est appelé à respecter l’autre, à prendre ses
            responsabilités et à contribuer positivement à la vie de l’établissement.
          </p>

          <h3>Une école où l’on apprend à vivre ensemble</h3>

          <p>
             À travers les activités pédagogiques, culturelles, sportives, religieuses et sociales,
            les élèves développent leur esprit d’équipe, leur créativité et leur sens des
            responsabilités.
          </p>

          <B to="/vie-du-lycee">Découvrir la vie scolaire </B>
        </div>
      </section>

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

      <section className="shell news-section">
        <div className="section-head">
          <K>Les dernières actualités</K>
          <h2>Les dernières actualités du lycée</h2>
        </div>

        <div className="news-grid">
          {newsCards.map((item) => (
            <article key={item.id} className="news-card">
              <img src={item.image || '/images/hero.jpg'} alt={item.title} />
              <div className="news-body">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <button type="button" className="btn second" onClick={() => setSelectedArticle(item)}>
                  Lire
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta-banner">
        <div className="shell home-cta-banner-inner">
          <div className="home-cta-copy">
            <K>Votre avenir commence ici</K>
            <h2>Choisir le LCNDT ...</h2>
            <p>
              ... c’est choisir un cadre où le savoir, la discipline, la foi, la fraternité et
              l’excellence contribuent à préparer les citoyens de demain.
            </p>
            <p>
              Bienvenue au Lycée-Collège Notre-Dame du Tchad de Moundou.
            </p>
          </div>

          <div className="home-cta-actions">
            <B to="/contact">Nous contacter</B>
          </div>
        </div>
      </section>
    </main>
  );
}
