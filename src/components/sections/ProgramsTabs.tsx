const programs = [
  {
    id: 'primary',
    title: '1er cycle',
    items: ['Classes de 6e à 3e', 'Programme général', 'Reservé aux filles'],
  },
  {
    id: 'secondary',
    title: '2nd cycle',
    items: ['Classes de Seconde à Terminale', 'Séries A4, C, D'],
  },
];

export function ProgramsTabs() {
  return (
    <section id="programs" className="section programs-section">
      <div className="shell">
        <div className="section-heading">
          <p className="k">
            <i />
            Organisation pédagogique
          </p>
          <h2>Cycles et parcours</h2>
        </div>

        <div className="programs-grid">
          {programs.map((p) => (
            <article key={p.id} className="program-card">
              <h3>{p.title}</h3>
              <ul>
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsTabs;
