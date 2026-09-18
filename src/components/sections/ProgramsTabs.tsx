import { useState } from 'react';

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
  const [active, setActive] = useState(programs[0].id);

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

        <div className="programs-tabs">
          <nav className="tabs" role="tablist" aria-label="Choisir un cycle">
            {programs.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={p.id === active}
                aria-controls={`panel-${p.id}`}
                className={p.id === active ? 'active' : ''}
                onClick={() => setActive(p.id)}
              >
                {p.title}
              </button>
            ))}
          </nav>

          <div className="tab-content">
            {programs.map((p) => (
              <div key={p.id} id={`panel-${p.id}`} role="tabpanel" hidden={p.id !== active}>
                <ul>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsTabs;
