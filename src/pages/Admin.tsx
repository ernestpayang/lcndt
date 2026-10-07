import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import AuthGate from '../components/AuthGate';
import { PageHero } from '../components/PageHero';
import { createEmptyItem, loadNews, saveNews, type NewsItem, type NewsKind } from '../data/news';

const byDateDesc = (a: NewsItem, b: NewsItem) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

function formatDateFR(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function AdminPage() {
  const [items, setItems] = useState<NewsItem[]>(() => loadNews());
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    saveNews(items);
  }, [items]);

  const articles = useMemo(
    () => items.filter((item) => item.kind === 'article').sort(byDateDesc),
    [items],
  );
  const events = useMemo(
    () => items.filter((item) => item.kind === 'event').sort(byDateDesc),
    [items],
  );

  function openNew(kind: NewsKind) {
    setEditing(createEmptyItem(kind));
    setFormError(null);
  }

  function handleImageFile(file: File | undefined) {
    if (!file || !editing) return;
    if (!file.type.startsWith('image/')) {
      setFormError('Le fichier choisi doit être une image (JPG, PNG, WebP...).');
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setFormError('Image trop lourde : 2 Mo maximum pour garder le site rapide.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setEditing({ ...editing, image: String(reader.result) });
      setFormError(null);
    };
    reader.readAsDataURL(file);
  }

  function saveItem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editing) return;
    if (!editing.title.trim() || !editing.date) {
      setFormError('Le titre et la date sont obligatoires.');
      return;
    }
    setFormError(null);
    setItems((current) => {
      const exists = current.some((item) => item.id === editing.id);
      if (exists) {
        return current.map((item) => (item.id === editing.id ? editing : item));
      }
      return [editing, ...current];
    });
    setEditing(null);
  }

  function removeItem(id: string, title: string) {
    if (!window.confirm(`Supprimer "${title}" ? Cette action est immédiate.`)) return;
    setItems((current) => current.filter((item) => item.id !== id));
    setEditing((current) => (current?.id === id ? null : current));
  }

  function togglePublished(id: string) {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, published: !item.published } : item)),
    );
  }

  return (
    <main className="inner">
      <PageHero
        image="/images/classroom.jpg"
        kicker="Administration"
        title="Gestion des articles et événements"
        lead="Gérez le contenu éditorial du site, publiez les actualités et mettez à jour le calendrier du lycée."
      />
      <div className="shell">
        <Link className="back" to="/">
          Retour
        </Link>
        <p className="k">
          <i />
          Administration
        </p>
        <h1>Gestion des articles et événements</h1>

        <AuthGate>
          <div className="admin-counters" aria-live="polite">
            <span>
              <strong>{articles.length}</strong> article{articles.length > 1 ? 's' : ''}
            </span>
            <span>
              <strong>{events.length}</strong> événement{events.length > 1 ? 's' : ''}
            </span>
            <span>
              <strong>{items.filter((i) => i.published).length}</strong> publié
              {items.filter((i) => i.published).length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="admin-toolbar">
            <button className="btn" type="button" onClick={() => openNew('article')}>
              Nouvel article
            </button>
            <button className="btn second" type="button" onClick={() => openNew('event')}>
              Nouvel événement
            </button>
          </div>

          {editing && (
            <form className="article-form" onSubmit={saveItem} noValidate>
              <h2>
                {items.some((i) => i.id === editing.id) ? 'Modifier' : 'Créer'}{' '}
                {editing.kind === 'article' ? 'un article' : 'un événement'}
              </h2>
              <label>
                Type
                <select
                  value={editing.kind}
                  onChange={(e) => setEditing({ ...editing, kind: e.target.value as NewsKind })}
                >
                  <option value="article">Article</option>
                  <option value="event">Événement</option>
                </select>
              </label>
              <label>
                Titre
                <input
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  placeholder="Ex. : Fete de fin d'annee"
                  required
                />
              </label>
              <label>
                Date
                <input
                  type="date"
                  value={editing.date}
                  onChange={(e) => setEditing({ ...editing, date: e.target.value })}
                  required
                />
              </label>
              <label>
                Extrait
                <textarea
                  value={editing.excerpt}
                  onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                  placeholder="Une phrase d'accroche affichee sur les cartes."
                />
              </label>
              <label>
                Image (URL)
                <input
                  value={editing.image ?? ''}
                  onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                  placeholder="https://... ou /images/photo.jpg"
                />
              </label>
              <div className="article-form-image">
                <button
                  className="btn second"
                  type="button"
                  onClick={() => fileRef.current?.click()}
                >
                  Choisir une image...
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleImageFile(e.target.files?.[0])}
                />
                {editing.image ? (
                  <img src={editing.image} alt="Apercu de l'image" />
                ) : (
                  <span className="form-note">
                    Aucune image : un visuel par defaut s'affichera.
                  </span>
                )}
              </div>
              <label>
                Contenu
                <textarea
                  rows={7}
                  value={editing.content}
                  onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                  placeholder="Le texte complet de l'article ou la description de l'événement."
                />
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  checked={editing.published}
                  onChange={(e) => setEditing({ ...editing, published: e.target.checked })}
                />
                Publié (visible sur le site)
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  checked={editing.featured}
                  onChange={(e) => setEditing({ ...editing, featured: e.target.checked })}
                />
                À la une
              </label>
              {formError && (
                <p className="form-note error" role="alert">
                  {formError}
                </p>
              )}
              <div className="admin-actions">
                <button className="btn" type="submit">
                  Enregistrer
                </button>
                <button className="btn second" type="button" onClick={() => setEditing(null)}>
                  Annuler
                </button>
              </div>
            </form>
          )}

          <div className="admin-lists">
            <AdminList
              title="Articles"
              empty="Aucun article pour le moment : créez le premier avec Nouvel article."
              items={articles}
              editingId={editing?.id ?? null}
              onEdit={setEditing}
              onToggle={togglePublished}
              onRemove={removeItem}
            />
            <AdminList
              title="Évènements"
              empty="Aucun événement pour le moment : créez le premier avec Nouvel événement."
              items={events}
              editingId={editing?.id ?? null}
              onEdit={setEditing}
              onToggle={togglePublished}
              onRemove={removeItem}
            />
          </div>
        </AuthGate>
      </div>
    </main>
  );
}

function AdminList({
  title,
  empty,
  items,
  editingId,
  onEdit,
  onToggle,
  onRemove,
}: {
  title: string;
  empty: string;
  items: NewsItem[];
  editingId: string | null;
  onEdit: (item: NewsItem) => void;
  onToggle: (id: string) => void;
  onRemove: (id: string, title: string) => void;
}) {
  return (
    <section aria-label={title}>
      <h2>
        {title} <span className="admin-count">({items.length})</span>
      </h2>
      {items.length === 0 ? (
        <p>{empty}</p>
      ) : (
        <ul className="admin-list admin-rows">
          {items.map((item) => (
            <li key={item.id} className={editingId === item.id ? 'is-editing' : undefined}>
              {item.image && <img src={item.image} alt="" loading="lazy" />}
              <div className="admin-item-body">
                <strong>{item.title || <em>Sans titre</em>}</strong>
                <span className="admin-item-meta">
                  {formatDateFR(item.date)}
                  <span className={`admin-pill ${item.published ? 'on' : 'off'}`}>
                    {item.published ? 'Publié' : 'Brouillon'}
                  </span>
                  {item.featured && <span className="admin-pill star">À la une</span>}
                </span>
              </div>
              <div className="admin-actions admin-row-actions">
                <button
                  className="btn small"
                  type="button"
                  onClick={() => onEdit(item)}
                  aria-label={`Modifier ${item.title || 'cet élément'}`}
                >
                  Modifier
                </button>
                <button
                  className="btn second small"
                  type="button"
                  onClick={() => onToggle(item.id)}
                  aria-pressed={item.published}
                  aria-label={`${item.published ? 'Dépublier' : 'Publier'} ${item.title || 'cet élément'}`}
                >
                  {item.published ? 'Dépublier' : 'Publier'}
                </button>
                <button
                  className="btn danger small"
                  type="button"
                  onClick={() => onRemove(item.id, item.title || 'cet élément')}
                  aria-label={`Supprimer ${item.title || 'cet élément'}`}
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default AdminPage;
