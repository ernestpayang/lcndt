const photos = [
  {
    src: '/images/gallery-classe.jpg',
    alt: 'Une classe du LCNDT en plein cours avec son enseignant',
    caption: 'Une classe en plein cours',
  },
  {
    src: '/images/gallery-sport.jpg',
    alt: 'Élèves en séance sportive sur le terrain du lycée',
    caption: 'Activité sportive',
  },
  {
    src: '/images/gallery-bibliotheque.jpg',
    alt: 'Séance de lecture à la bibliothèque du lycée',
    caption: 'Séance de bibliothèque',
  },
  {
    src: '/images/gallery-foret.jpg',
    alt: 'Élèves lors d’une sortie d’exploration en forêt',
    caption: 'Exploration de la forêt',
  },
];

/** Galerie de photos de la vie du lycée. Photos issues de la banque libre Pexels. */
export function PhotoGallery() {
  return (
    <section className="section gallery-section">
      <div className="shell">
        <div className="section-heading">
          <p className="k">
            <i />
            La vie en images
          </p>
          <h2>Le lycée en images</h2>
          <p className="gallery-lead">
            Cours, sport, lecture et découverte de la nature : le quotidien des élèves du LCNDT.
          </p>
        </div>

        <div className="photo-gallery">
          {photos.map((photo) => (
            <figure key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
