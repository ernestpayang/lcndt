const stats: ReadonlyArray<readonly [label: string, value: string, note: string]> = [
  ['Effectif', '411 élèves', '301 filles / 110 garçons'],
  ['Admission supérieure', '80 % à 95 %', 'Taux d’admission en classe supérieure'],
  ['Réussite aux examens', '90 % à 100 %', 'BEPCT et baccalauréat'],
  ['Années d’existence', '50+', 'Depuis 1966'],
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
