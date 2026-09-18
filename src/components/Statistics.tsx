const stats: ReadonlyArray<readonly [label: string, value: string, note: string]> = [
  ['Élèves inscrits', '743', 'Année scolaire 2026/2027'],
  ['Enseignants & Personnel', '32', 'Corps pédagogique et encadrement'],
  ['Taux de réussite BEPC', '100%', 'Dernière session'],
  ['Taux de réussite BAC', '98%', 'Dernière session'],
];

export function Statistics() {
  return (
    <section className="statistics">
      <div className="shell statistics-layout">
        <div className="statistics-indicators">
          {stats.map(([label, value, note]) => (
            <div className="stat-item" key={label}>
              <strong className="stat-value">{value}</strong>
              <span className="stat-label">{label}</span>
              <small className="stat-note">{note}</small>
            </div>
          ))}
        </div>

        <div className="statistics-caption">
          <p className="k">
            <i />
            Nos statistiques
          </p>
          <h2>Indicateurs clés de la communauté scolaire</h2>
          <p className="statistics-intro">
            Chiffres récents et vérifiables : effectifs, personnel et résultats des dernières
            sessions.
          </p>
        </div>
      </div>
    </section>
  );
}
