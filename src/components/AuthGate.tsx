import { useState, useEffect, useRef, type FormEvent, type ReactNode } from 'react';

const ADMIN_FLAG = 'site_is_admin';
const AUTH_KEY = 'site_admin_auth';
const DEFAULT_EMAIL = 'admin@lcndt.td';
const DEFAULT_PW = 'admin123';

type AdminCredentials = { email: string; password: string };

function loadCredentials(): AdminCredentials {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<AdminCredentials>;
      if (typeof parsed.email === 'string' && typeof parsed.password === 'string') {
        return { email: parsed.email, password: parsed.password };
      }
    }
  } catch {
    /* identifiants par défaut ci-dessous */
  }
  return { email: DEFAULT_EMAIL, password: DEFAULT_PW };
}

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AuthGate({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => sessionStorage.getItem(ADMIN_FLAG) === '1');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [credsOpen, setCredsOpen] = useState(false);

  useEffect(() => {
    if (isAdmin) sessionStorage.setItem(ADMIN_FLAG, '1');
    else sessionStorage.removeItem(ADMIN_FLAG);
  }, [isAdmin]);

  function attemptLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const stored = loadCredentials();
    const emailOk = email.trim().toLowerCase() === stored.email.toLowerCase();
    if (emailOk && pw === stored.password) {
      setIsAdmin(true);
      setMessage(null);
      setEmail('');
      setPw('');
    } else {
      setMessage('Adresse e-mail ou mot de passe incorrect.');
    }
  }

  function logout() {
    setIsAdmin(false);
  }

  function updateCredentials(newEmail: string, newPw: string) {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ email: newEmail, password: newPw }));
    setMessage('Identifiants mis à jour.');
  }

  if (isAdmin) {
    return (
      <div className="auth-area">
        <div className="auth-bar">
          <strong>Mode administration</strong>
          <div className="auth-bar-actions">
            <button className="btn second" type="button" onClick={() => setCredsOpen(true)}>
              Mise à jour d’info
            </button>
            <button className="btn second" type="button" onClick={logout}>
              Se déconnecter
            </button>
          </div>
        </div>
        {message && (
          <p className="form-note success" aria-live="polite">
            {message}
          </p>
        )}
        <div>{children}</div>
        {credsOpen && (
          <CredentialsModal
            onClose={() => setCredsOpen(false)}
            onSave={(newEmail, newPw) => {
              updateCredentials(newEmail, newPw);
              setCredsOpen(false);
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="auth-login">
      <form onSubmit={attemptLogin}>
        <label>
          Adresse e-mail
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@lcndt.td"
            required
          />
        </label>
        <label>
          Mot de passe administrateur
          <input
            type="password"
            autoComplete="current-password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Votre mot de passe"
            required
          />
        </label>
        <div className="auth-submit">
          <button className="btn" type="submit">
            Se connecter
          </button>
        </div>
        {message && (
          <p className="form-note error" role="alert">
            {message}
          </p>
        )}
        <p className="form-note">
          Accès par défaut : <em>{DEFAULT_EMAIL}</em> / <em>{DEFAULT_PW}</em>. Changez-les après la
          première connexion.
        </p>
      </form>
    </div>
  );
}

function ChangeCredentials({ onSave }: { onSave: (email: string, pw: string) => void }) {
  const [newEmail, setNewEmail] = useState('');
  const [newPw, setNewPw] = useState('');
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!EMAIL_OK.test(newEmail.trim()) || newPw.length < 6) {
          setError('Indiquez un e-mail valide et un mot de passe d’au moins 6 caractères.');
          return;
        }
        setError(null);
        onSave(newEmail.trim(), newPw);
        setNewEmail('');
        setNewPw('');
      }}
    >
      <label>
        Nouvel e-mail
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="nouvel-email@exemple.td"
        />
      </label>
      <label>
        Nouveau mot de passe
        <input
          type="password"
          autoComplete="new-password"
          value={newPw}
          onChange={(e) => setNewPw(e.target.value)}
          placeholder="6 caractères minimum"
        />
      </label>
      {error && (
        <p className="form-note error" role="alert">
          {error}
        </p>
      )}
      <div className="auth-submit">
        <button className="btn" type="submit">
          Mettre à jour les identifiants
        </button>
      </div>
    </form>
  );
}

/** Fenêtre modale de mise à jour des identifiants (e-mail + mot de passe). */
export function CredentialsModal({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (email: string, pw: string) => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    overlayRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previousFocus.current?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="preview-overlay"
      ref={overlayRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="creds-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="preview-card creds-card">
        <header>
          <h2 id="creds-modal-title">Mise à jour d’info</h2>
          <p className="form-note">
            Mettez à jour l’adresse e-mail et le mot de passe administrateur.
          </p>
        </header>
        <div className="preview-body">
          <ChangeCredentials onSave={onSave} />
        </div>
        <div className="preview-actions">
          <button className="btn second" type="button" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
