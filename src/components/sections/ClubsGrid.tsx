const clubs = [
  { name: 'Club de lecture', leader: 'Mme. K. Sembène', freq: 'Hebdomadaire' },
  { name: 'Football', leader: 'M. T. Ngonga', freq: '3x / semaine' },
  { name: 'Club scientifique', leader: 'Mme. R. Dodo', freq: 'Bi-mensuel' },
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
