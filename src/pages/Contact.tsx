import { useState, type FormEvent } from 'react';
import { ContactCoordinates } from '../components/OfficialDetails';
import { school } from '../data/site';

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !EMAIL_OK.test(email) || !message.trim()) {
      setError('Merci de renseigner au minimum votre nom, un e-mail valide et un message.');
      setSent(false);
      return;
    }
    setError(null);
    setSent(true);
    const body = `${message}\n\n— ${name} (${email})`;
    const href = `${school.emailHref}?subject=${encodeURIComponent(subject.trim() || 'Message depuis le site LCNDT')}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <main className="inner">
      <div className="shell contact-heading">
        <h1>Contactez la vie scolaire</h1>
        <p className="inner-lead">
          Pour toute demande administrative, utilisez le formulaire ci-dessous ou appelez le
          secrétariat.
        </p>

        <div className="contact-row">
          <form onSubmit={handleSubmit} noValidate>
            <label>
              Nom complet
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom complet"
              />
            </label>
            <label>
              Adresse e-mail
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
              />
            </label>
            <label>
              Sujet
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Objet de votre message"
              />
            </label>
            <label>
              Message
              <textarea
                rows={7}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message"
              />
            </label>
            {error && (
              <p className="form-note error" role="alert">
                {error}
              </p>
            )}
            {sent && (
              <p className="form-note success" aria-live="polite">
                Merci ! Votre messagerie s’ouvre avec le message pré-rempli — il ne reste qu’à
                l’envoyer.
              </p>
            )}
            <button className="btn" type="submit">
              Envoyer
            </button>
          </form>
          <ContactCoordinates />
        </div>
      </div>
      <section className="shell contact-map" aria-labelledby="contact-map-title">
        <p className="k">
          <i />
          Nous trouver
        </p>
        <h2 id="contact-map-title">La carte du lycée</h2>
        <p className="contact-map-lead">{school.address}</p>
        <div className="contact-map-frame">
          <iframe
            title={`Carte — ${school.name}, ${school.address}`}
            src={school.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="contact-map-link">
          <a href={school.mapLink} target="_blank" rel="noreferrer">
            Ouvrir dans Google Maps
          </a>
        </p>
      </section>
    </main>
  );
}
