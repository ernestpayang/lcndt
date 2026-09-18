import { useMemo, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ArticlePreview from '../components/ArticlePreview';
import { getPublishedArticles, getUpcomingEvents, loadNews, type NewsItem } from '../data/news';
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

  const upcomingEvents = useMemo(() => getUpcomingEvents(items), [items]);
  const articles = useMemo(() => getPublishedArticles(items), [items]);

  const featuredEvents = upcomingEvents.slice(0, 3);

  return (
    <main className="inner">
      <div className="shell">
        <h1>Actualités & Évènements</h1>

        <ArticlePreview article={selected} onClose={() => setSelected(null)} />

        <section className="featured-section" aria-labelledby="a-la-une-titre">
          <div className="section-heading">
            <p className="k">
              <i />
              Mise en avant
            </p>
            <h2 id="a-la-une-titre">À la une</h2>
            <p className="news-section-note">Les trois évènements à venir les plus proches.</p>
          </div>
          {featuredEvents.length === 0 ? (
            <p className="empty-note">Aucun évènement à venir pour le moment.</p>
          ) : (
            <div className="featured-grid">
              {featuredEvents.map((event) => (
                <NewsCard key={event.id} item={event} featured onRead={() => setSelected(event)} />
              ))}
            </div>
          )}
        </section>

        <section className="events-section" aria-labelledby="evenements-titre">
          <div className="section-heading">
            <p className="k">
              <i />
              Agenda
            </p>
            <h2 id="evenements-titre">Évènements</h2>
            <p className="news-section-note">
              {upcomingEvents.length} évènement{upcomingEvents.length > 1 ? 's' : ''} à venir —
              trois par ligne, faites défiler horizontalement pour voir la suite.
            </p>
          </div>
          {upcomingEvents.length === 0 ? (
            <p className="empty-note">Aucun évènement prévu pour le moment.</p>
          ) : (
            <Carousel id="piste-evenements" label="Évènements à venir">
              {upcomingEvents.map((event) => (
                <NewsCard key={event.id} item={event} onRead={() => setSelected(event)} />
              ))}
            </Carousel>
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
