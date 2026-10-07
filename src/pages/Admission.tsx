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
        lead="L'Admission au LCNDT se fait par un test d'entrée organisé en septembre de chaque année. Les candidats doivent fournir un dossier complet comprenant les pièces justificatives nécessaires."
      />
      <div className="shell">
        <h1>Admission et procédures</h1>
        <p className="inner-lead">
          La page Admission regroupe le processus, les pièces à fournir et les étapes à suivre.
        </p>
        <div className="admit">
          <strong>Dossier type</strong>
          <ul>
            <li>Une copie d'Acte de naissance</li>
            <li>Une copie du Bulletin du 3ème trimestre de la dernière année</li>
            <li>Une photo d'identité</li>
          </ul>
        </div>
      </div>
      <AdmissionSteps />
      <AdmissionDetails />
    </main>
  );
}
