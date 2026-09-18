import { Link } from 'react-router-dom';
import { K } from '../shared/ui';

export default function NotFound() {
  return (
    <main className="inner">
      <div className="shell">
        <p className="k">
          <i />
          Erreur 404
        </p>
        <h1>Page introuvable</h1>
        <p className="inner-lead">La page que vous cherchez n’existe pas ou a été déplacée.</p>
        <Link className="btn" to="/">
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
