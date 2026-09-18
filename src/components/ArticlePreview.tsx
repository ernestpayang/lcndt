import { useEffect, useRef } from 'react';

type Article = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
};

export default function ArticlePreview({
  article,
  onClose,
}: {
  article: Article | null;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!article) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    overlayRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [article, onClose]);

  if (!article) return null;

  const titleId = `preview-title-${article.id}`;

  function closeAndRestoreFocus() {
    onClose();
    previousFocus.current?.focus();
  }

  return (
    <div
      ref={overlayRef}
      className="preview-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAndRestoreFocus();
      }}
    >
      <div className="preview-card">
        <header>
          <h2 id={titleId}>{article.title}</h2>
          <small className="meta">{article.date}</small>
        </header>
        {article.image && <img src={article.image} alt={article.title} loading="lazy" />}
        <article className="preview-body">
          <p className="excerpt">{article.excerpt}</p>
          <div className="content">
            {(article.content || '').split('\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
        <div className="preview-actions">
          <button className="btn" type="button" onClick={closeAndRestoreFocus}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
