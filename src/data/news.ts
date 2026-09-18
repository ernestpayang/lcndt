export type NewsKind = 'article' | 'event';

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  kind: NewsKind;
  published: boolean;
  featured: boolean;
};

const STORAGE_KEY = 'site_news';

export function createEmptyItem(kind: NewsKind): NewsItem {
  return {
    id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: '',
    date: new Date().toISOString().slice(0, 10),
    excerpt: '',
    content: '',
    image: '',
    kind,
    published: true,
    featured: false,
  };
}

export function loadNews(): NewsItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [
        {
          id: 'seed-1',
          title: 'Journée portes ouvertes',
          date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 12).toISOString().slice(0, 10),
          excerpt: 'La communauté scolaire accueille les familles et les futurs élèves.',
          content: 'Les familles sont invitées à découvrir le lycée ...',
          image: '/images/hero.jpg',
          kind: 'event',
          published: true,
          featured: true,
        },
        {
          id: 'seed-2',
          title: 'Rentrée scolaire 2026',
          date: '2026-09-22',
          excerpt: 'Les premiers jours de cours et les consignes de rentrée.',
          content: 'Le lycée organise la rentrée ...',
          image: '/images/classroom.jpg',
          kind: 'article',
          published: true,
          featured: false,
        },
      ];
    }
    const parsed = JSON.parse(raw) as NewsItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveNews(items: NewsItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function getPublishedArticles(items: NewsItem[] = loadNews()) {
  return items
    .filter((item) => item.published && item.kind === 'article')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getUpcomingEvents(items: NewsItem[] = loadNews()) {
  const now = new Date();
  return items
    .filter((item) => item.published && item.kind === 'event' && new Date(item.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
