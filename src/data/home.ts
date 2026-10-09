/**
 * Données de contenu de la page d'accueil.
 *
 * Ce fichier centralise les blocs éditables de la page d'accueil afin qu'ils soient
 * faciles à modifier sans avoir à parcourir le composant React complet.
 */

export type HomeStat = {
  value: string;
  label: string;
  note: string;
};

export type HomeHighlight = {
  title: string;
  text: string;
};

export type HomeCourse = {
  title: string;
  text: string;
  image: string;
};

export const schoolStats: HomeStat[] = [
  { value: '411', label: 'élèves', note: '301 filles / 110 garçons en 2026' },
  { value: '60 +', label: 'ans', note: 'd’existence (depuis 1966)' },
  { value: '80 - 95%', label: 'admission', note: 'en classe supérieure' },
  { value: '90 - 100%', label: 'réussite', note: 'aux examens et concours' },
];

export const bodyHighlights: HomeHighlight[] = [
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

export const courseCards: HomeCourse[] = [
  {
    title: 'Premier Cycle : 6ème d\'accueil - 3ème',
    text: 'Un nombre limité d\'élèves est affecté à chaque classe pour garantir un encadrement de qualité.',
    image: '/images/gallery-classe.jpg',
  },
  {
    title: 'Second cycle : 2nde - Terminales',
    text: 'Des classes des Sciences et de Littératures sont disponibles pour préparer l\'avenir de vos progénitures.',
    image: '/images/gallery-sport.jpg',
  },
];
