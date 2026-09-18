const faqs = [
  {
    q: 'Comment inscrire un élève ?',
    a: 'Prendre contact avec l’administration. Dossier: acte de naissance, bulletins et certificat médical.',
  },
  {
    q: 'Y a-t-il un internat ?',
    a: 'Oui, places limitées selon filières. Contacter la scolarité.',
  },
  { q: 'Quels sont les horaires ?', a: 'Journée de 07:30 à 16:30 avec pauses et cantine.' },
];

export function FAQ() {
  return (
    <section className="section faq-section">
      <div className="shell">
        <div className="section-heading">
          <p className="k">
            <i />
            FAQ
          </p>
          <h2>Questions pratiques</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
