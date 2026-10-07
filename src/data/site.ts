/** Source unique de vérité : navigation, établissement, contacts et équipe. */

export const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Administration', path: '/administration' },
  { label: 'Vie du Lycée', path: '/vie-du-lycee' },
  { label: 'Actualités', path: '/actualites-evenements' },
  { label: 'Admission', path: '/admission' },
  { label: 'Contact', path: '/contact' },
] as const;

/** Route de l'espace d'administration (volontairement absente du menu public). */
export const adminPath = '/admin';

export const school = {
  shortName: 'LCNDT',
  name: 'Lycée Collège Notre Dame du Tchad',
  tagline: 'Lycée Collège Notre Dame du Tchad (LCNDT), Moundou : plus de 50 ans au service de l’éducation',
  city: 'Moundou',
  address: 'Lycée Collège Notre Dame du Tchad, BP 61, Moundou, Tchad',
  phoneDisplay: '+235 66363126',
  phoneHref: 'tel:+23566363126',
  email: 'lcndt-moundou@gmail.com',
  emailHref: 'mailto:lcndt-moundou@gmail.com',
  hours: 'Lundi au samedi, 7h00 à 17h00',
  whatsapp: 'https://wa.me/23566363126',
  facebook: 'https://www.facebook.com/share/1GgB1zrVq2/',
  mapEmbed: 'https://www.google.com/maps?q=8.5667,16.0833&z=14&output=embed',
  mapLink: 'https://maps.app.goo.gl/JhgptAGcFHY7EL8P6?g_st=atm',
} as const;

export const staff = [
  { name: 'LASSEM BEINDÉ', role: 'Proviseur' },
  { name: 'LOMBAYE RENE', role: 'Censeur' },
  { name: 'MIANTONANG THOMAS', role: 'Surveillant du 2nd cycle' },
  { name: 'ALBAN MAKER', role: 'Surveillant du 1er cycle' },
] as const;
