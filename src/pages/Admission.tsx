import { Link } from 'react-router-dom';
import { K } from '../shared/ui';
import { AdmissionSteps } from '../components/ProfessionalSections';
import { AdmissionDetails } from '../components/OfficialDetails';
import { PageHero } from '../components/PageHero';

export default function Admission() {
  return (
    <main className="inner">
      <PageHero
        image="/images/study.jpg"
        kicker="Admission"
        title="Admission et procédures"
        lead="La page Admission regroupe le processus, les pièces à fournir et les étapes à suivre pour intégrer le lycée."
      />
      <div className="shell">
        <h1>Admission et procédures</h1>
        <p className="inner-lead">
          La page Admission regroupe le processus, les pièces à fournir et les étapes à suivre.
        </p>
        <div className="admit">
          <strong>Dossier type</strong>
          <ul>
            <li>Acte de naissance</li>
            <li>Bulletins des 2 dernières années</li>
            <li>Certificat médical</li>
          </ul>
        </div>
      </div>
      <AdmissionSteps />
      <AdmissionDetails />
    </main>
  );
}
