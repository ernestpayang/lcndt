import { useMemo, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ArticlePreview from '../components/ArticlePreview';
import { PageHero } from '../components/PageHero';
import { getPublishedArticles, loadNews, type NewsItem } from '../data/news';
import { K } from '../shared/ui';

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

function NewsCard({
  item,
  featured = false,
  onRead,
}: {
  item: NewsItem;
  featured?: boolean;
  onRead: () => void;
}) {
  return (
    <article className={featured ? 'featured-card' : 'news-mini-card'}>
      {item.image && <img src={item.image} alt={item.title} loading="lazy" decoding="async" />}
      <div className="news-mini-body">
        {item.featured && <span className="badge">À la une</span>}
        <p className="meta">
          {formatDate(item.date)} · {item.kind === 'event' ? 'Évènement' : 'Article'}
        </p>
        <h3>{item.title}</h3>
        <p className="news-mini-excerpt">{item.excerpt}</p>
        <button className="btn second" type="button" onClick={onRead}>
          Lire
        </button>
      </div>
    </article>
  );
}

function Carousel({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <div className="carousel">
      <div
        ref={trackRef}
        id={id}
        className="cards-row"
        role="region"
        aria-roledescription="carrousel"
        aria-label={label}
        tabIndex={0}
      >
        {children}
      </div>
      <div className="carousel-nav">
        <button
          className="btn second carousel-btn"
          type="button"
          onClick={() => scroll(-1)}
          aria-controls={id}
          aria-label={`Faire défiler ${label} vers la gauche`}
        >
          ‹
        </button>
        <button
          className="btn second carousel-btn"
          type="button"
          onClick={() => scroll(1)}
          aria-controls={id}
          aria-label={`Faire défiler ${label} vers la droite`}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function Actualites() {
  const [items] = useState(() => loadNews());
  const [selected, setSelected] = useState<NewsItem | null>(null);

  const articles = useMemo(() => getPublishedArticles(items), [items]);
  const featuredArticles = useMemo(() => articles.slice(0, 3), [articles]);

  return (
    <main className="inner">
      <PageHero
        image="/images/activities.jpg"
        kicker="Actualités"
        title="Actualités"
        lead="Suivez les dernières annonces, publications et moments forts de la vie du lycée."
      />
      <div className="shell">
        <h1>Actualités</h1>

        <ArticlePreview article={selected} onClose={() => setSelected(null)} />

        <section className="featured-section" aria-labelledby="a-la-une-titre">
          <div className="section-heading">
            <p className="k">
              <i />
              Mise en avant
            </p>
            <h2 id="a-la-une-titre">À la une</h2>
            <p className="news-section-note">Les trois dernières publications les plus visibles.</p>
          </div>
          {featuredArticles.length === 0 ? (
            <p className="empty-note">Aucune actualité pour le moment.</p>
          ) : (
            <div className="featured-grid">
              {featuredArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  item={article}
                  featured
                  onRead={() => setSelected(article)}
                />
              ))}
            </div>
          )}
        </section>

        <section className="articles-section" aria-labelledby="actualites-titre">
          <div className="section-heading">
            <p className="k">
              <i />
              La vie de l’établissement
            </p>
            <h2 id="actualites-titre">Actualités</h2>
            <p className="news-section-note">
              {articles.length} article{articles.length > 1 ? 's' : ''} publié
              {articles.length > 1 ? 's' : ''} — trois par ligne, défilement horizontal pour la
              suite.
            </p>
          </div>
          {articles.length === 0 ? (
            <p className="empty-note">Aucun article publié pour le moment.</p>
          ) : (
            <Carousel id="piste-articles" label="Articles publiés">
              {articles.map((article) => (
                <NewsCard key={article.id} item={article} onRead={() => setSelected(article)} />
              ))}
            </Carousel>
          )}
        </section>
      </div>
    </main>
  );
}
