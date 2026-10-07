const clubs = [
  { name: 'Bibliothèque', leader: 'Soeur Sylvie et Mr Donald', freq: '40 minutes par semaine' },
  { name: 'Eductation Sportive', leader: 'M. Hervé', freq: '1x / semaine' },
  { name: 'Messe', leader: 'L\'Hômonier du Lycée', freq: 'Première heure de chaque vendredi' },
];

export function ClubsGrid() {
  return (
    <section className="section clubs-section">
      <div className="shell">
        <div className="section-heading">
          <p className="k">
            <i />
            Activités
          </p>
          <h2>Clubs et temps périscolaires</h2>
        </div>

        <div className="value-grid">
          {clubs.map((c) => (
            <article key={c.name} className="value-card">
              <h3>{c.name}</h3>
              <p>
                <strong>Responsable:</strong> {c.leader}
              </p>
              <p>
                <strong>Fréquence:</strong> {c.freq}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClubsGrid;
