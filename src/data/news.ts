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
          title: 'Célébration du cinquantenaire',
          date: '2016-12-10',
          excerpt:
            'Théâtres, sketches, poèmes et messe d’action de grâce ont marqué la célébration du cinquantenaire du lycée.',
          content:
            'Le Lycée Collège Notre Dame du Tchad a célébré son cinquantenaire avec une série de moments forts qui ont rassemblé les élèves, les enseignants, les parents et les anciens de l’établissement. Cette grande fête a été l’occasion de rendre hommage à l’histoire de l’école, à son engagement au service de l’éducation et à la mission qui l’anime depuis plus de cinquante ans.\n\nLes élèves ont présenté des sketches, des poèmes et des pièces de théâtre inspirés de la vie scolaire, de l’histoire du lycée et des valeurs qui fondent son identité. Les performances ont donné à voir la créativité, la discipline et la joie de vivre qui caractérisent la communauté du LCNDT.\n\nLa célébration a culminé par une messe d’action de grâce, un moment de recueillement et de remerciement où la communauté a exprimé sa gratitude pour la Providence, les personnels qui ont œuvre sans relâche, et les nombreux élèves qui ont fait rayonner le lycée dans leur parcours de vie.\n\nAu-delà des festivités, cette commémoration a également permis de rappeler la mission éducative de l’établissement : former des jeunes capables de porter la foi, la culture, la vérité et le service au cœur de leur vie professionnelle et sociale. C’était une journée de mémoire, de fierté collective et d’espérance pour les années à venir.',
          image: '/images/hero.jpg',
          kind: 'article',
          published: true,
          featured: true,
        },
        {
          id: 'seed-2',
          title: 'Reprise des cours pour l’année 2026 - 2027',
          date: '2026-09-08',
          excerpt:
            'Le lycée a officiellement accueilli les élèves pour la nouvelle année scolaire, dans un cadre discipliné et porteur d’espérance.',
          content:
            'La reprise des cours pour l’année académique 2026-2027 a été marquée par une forte mobilisation de la communauté scolaire. Dès les premiers jours, les élèves ont retrouvé le campus avec un esprit de sérieux, de préparation et de rassemblement. Cette rentrée a constitué une étape importante dans la continuité de la mission éducative du Lycée Collège Notre Dame du Tchad, qui continue de former les jeunes dans la foi, la discipline et l’excellence.\n\nÀ leur arrivée, les élèves ont été accueillis par les responsables de l’établissement, les enseignants et les personnels encadrants. Le dispositif de rentrée a permis de rappeler les valeurs essentielles du lycée : respect des règles, assiduité, devoirs, éthique du travail, esprit de responsabilité et souci du bien commun. Les familles, de leur côté, ont été sensibilisées aux attentes institutionnelles et aux moyens mis en place pour garantir un cadre sûr et stimulant.\n\nLes enseignements ont repris selon le calendrier académique, avec une organisation prévue pour chacun des cycles. Les enseignants ont poursuivi le travail de préparation des classes, la remise à niveau, l’orientation pédagogique et l’accompagnement individualisé des élèves. Pour la direction, cette reprise a été l’occasion de confirmer l’engagement de l’établissement à offrir à chaque jeune un cadre de vie propice à la réussite, tout en favorisant l’épanouissement personnel.\n\nCette rentrée s’inscrit dans la dynamique de l’établissement qui, depuis des années, a su conjuguer exigence académique et formation humaine. Elle donne aussi le ton de la nouvelle année : une année de travail, d’effort collectif, de partage des valeurs et de préparation à l’avenir.',
          image: '/images/classroom.jpg',
          kind: 'article',
          published: true,
          featured: true,
        },
        {
          id: 'seed-3',
          title: 'Excellence académique',
          date: '2026-06-18',
          excerpt:
            'Le LCNDT continue d’afficher des taux de réussite parmi les meilleurs grâce à l’exigence, le travail et le suivi pédagogique.',
          content:
            'Le Lycée Collège Notre Dame du Tchad poursuit son chemin dans l’excellence académique. Les résultats obtenus au cours des dernières sessions témoignent de la qualité du travail mené par les enseignants, la discipline des élèves et l’encadrement constant offert par l’établissement. Le niveau d’exigence, autant sur le plan pédagogique que sur le plan de la conduite, reste une valeur centrale du lycée.\n\nL’excellence n’est pas seulement le fruit du talent individuel ; elle est surtout le résultat d’un effort collectif. Chez le LCNDT, les élèves bénéficient d’un suivi régulier, de cours structurés, d’un encadrement rigoureux et d’un cadre de travail favorable à la concentration et à la réussite. Les enseignants veillent à la qualité de l’enseignement, tandis que les familles et l’administration soutiennent les élèves dans leurs parcours académiques.\n\nAu-delà des résultats chiffrés, cette excellence se traduit par un développement durable des compétences. Elle repose sur la volonté de former des jeunes capables de raisonner, d’apprendre, de travailler en équipe et d’assumer des responsabilités. C’est dans cette logique de préparation à l’avenir que le lycée continue d’inscrire ses efforts, tant dans le collège que dans le second cycle.\n\nCette réputation d’excellence est aussi le signe d’une communauté solide, engagée dans la réussite de chacun. Elle encourage les élèves à viser haut tout en restant ancrés dans les valeurs de rigueur, de respect et de service.',
          image: '/images/gallery-sport.jpg',
          kind: 'article',
          published: true,
          featured: false,
        },
        {
          id: 'seed-4',
          title: 'Vie de campus',
          date: '2026-04-12',
          excerpt:
            'Une communauté scolaire soudée, disciplinée et orientée vers l’avenir, où la vie du campus contribue à la formation globale des élèves.',
          content:
            'La vie de campus au Lycée Collège Notre Dame du Tchad est un lieu de rencontre, de formation et d’engagement. Elle se construit au quotidien à travers les échanges entre élèves, enseignants, personnels et familles. Cette dynamique contribue à forger une communauté scolaire soudée, disciplinée et riche de valeurs.\n\nAu-delà des salles de classe, les élèves bénéficient d’un environnement favorable au développement humain et à la croissance intellectuelle. Les habitudes de travail, le respect du cadre, la vie en communauté et les activités collectives renforcent leur capacité à vivre ensemble, à se responsabiliser et à grandir dans un esprit de fraternité.\n\nCette vie de campus est également le lieu où se développent les qualités de leadership, d’écoute, de solidarité et de civisme. Elle encourage les jeunes à adopter une posture constructive, à prendre soin des autres et à participer à la vie de l’établissement avec sérieux. C’est dans cette atmosphère de confiance et de discipline que se construisent les personnalités et les talents.\n\nLa communauté du LCNDT garde ainsi une identité forte : une école qui n’enseigne pas seulement les savoirs, mais qui forme aussi des citoyens responsables, des jeunes ouverts sur le monde et capables d’engager leur talent au service de la société. La vie du campus reste donc un pilier essentiel de la mission éducative du lycée.',
          image: '/images/courtyard.jpg',
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
