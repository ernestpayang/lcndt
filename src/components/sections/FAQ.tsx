const faqs = [
  {
    q: 'Comment inscrire un élève ?',
    a: 'Les inscriptions de nouveaux élèves se font après les tests d’admission, généralement en septembre.',
  },
  {
    q: 'Y a-t-il un internat ?',
    a: 'Oui, il y a le service Demi-internat (de 12:30 à 15:30) uniquement réservé aux filles.',
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
