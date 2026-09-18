import { Link } from 'react-router-dom';
import { K } from '../shared/ui';
import { LeadershipSection } from '../components/ProfessionalSections';

export default function Administration() {
  return (
    <main className="inner">
      <div className="shell">
        <h1>Administration</h1>
        <p className="inner-lead">
          Établissement d’enseignement secondaire engagé dans un cadre d’apprentissage sérieux,
          humain et tourné vers l’avenir.
        </p>
      </div>
      <LeadershipSection />
    </main>
  );
}
