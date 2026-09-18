import { Link } from 'react-router-dom';
import { navItems, school } from '../../data/site';

export function Footer() {
  return (
    <footer>
      <div className="shell footer-layout">
        <section className="footer-school">
          <strong>{school.name}</strong>
          <p>Lycée catholique qui forme des cadres depuis plus de 50 ans, à Moundou.</p>
        </section>
        <nav className="footer-links" aria-label="Liens rapides">
          <strong>Liens rapides</strong>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>
        <address className="footer-contact">
          <strong>Contact</strong>
          <span>{school.address}</span>
          <a href={school.phoneHref}>{school.phoneDisplay}</a>
          <a href={school.emailHref}>{school.email}</a>
        </address>
      </div>
      <div className="shell footer-copyright">© 2026 {school.shortName}. Tous droits réservés.</div>
    </footer>
  );
}
