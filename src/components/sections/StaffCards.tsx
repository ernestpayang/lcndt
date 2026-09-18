import { staff } from '../../data/site';

export function StaffCards() {
  return (
    <section className="section staff-section">
      <div className="shell">
        <div className="section-heading">
          <p className="k">
            <i />
            Encadrement
          </p>
          <h2>Contacts clés</h2>
        </div>

        <div className="team-grid">
          {staff.map(({ name, role }) => (
            <article key={name} className="team-card">
              <div className="avatar">
                {name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <strong>{name}</strong>
              <span>{role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StaffCards;
