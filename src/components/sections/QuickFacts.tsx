const facts = [
  { label: 'Élèves', value: '743' },
  { label: 'Classes', value: '13' },
  { label: 'Enseignants', value: '32' },
  { label: 'Internat', value: 'Oui (sélectif)' },
];

export function QuickFacts() {
  return (
    <section className="section quick-facts">
      <div className="shell">
        <div className="statistics-grid">
          {facts.map((f) => (
            <article key={f.label} className="stat-box">
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickFacts;
