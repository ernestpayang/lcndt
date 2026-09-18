export function LifeHero({ school }: { school: string }) {
  return (
    <section className="hero life-hero">
      <div className="shell heroGrid">
        <div className="hero-copy">
          <h1>Organisation et vie quotidienne</h1>
          <p className="hero-lead">
            {school} — horaires, services et informations pratiques pour les familles et les élèves.
          </p>
          <div className="hero-actions">
            <a className="btn" href="/vie-du-lycee#programs">
              Programmes
            </a>
            <a className="btn second" href="/contact">
              Contacter la vie scolaire
            </a>
          </div>
        </div>

        <div className="heroImg">
          <img
            src="/images/classroom.jpg"
            alt="Salle de classe"
            width={400}
            height={400}
            decoding="async"
            fetchPriority="high"
          />
          <aside>
            <p className="k">
              <i />
              Repères
            </p>
            <strong>Récréation: 10h30 — Cantine: 12h00 — Sortie: 16h00</strong>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default LifeHero;
