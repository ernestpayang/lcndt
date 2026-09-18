import { Menu } from 'lucide-react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { PageReveal } from './components/layout/PageReveal';
import Home from './pages/Home';
import VieDuLycee from './pages/VieDuLycee';
import Administration from './pages/Administration';
import Actualites from './pages/Actualites';
import Admin from './pages/Admin';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { navItems } from './data/site';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell head">
        <Link className="brand" to="/" aria-label="Accueil LCNDT">
          <b>LC</b>
          <span>
            <strong>LCNDT</strong>
            <em>Notre Dame du Tchad</em>
          </span>
        </Link>
        <nav aria-label="Navigation principale" className="main-nav">
          {navItems.map((item) => (
            <Link to={item.path} key={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="mobile" id="mobile-nav">
          {navItems.map((item) => (
            <Link to={item.path} key={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageReveal />
      <PageTransition>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vie-du-lycee" element={<VieDuLycee />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/actualites-evenements" element={<Actualites />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </PageTransition>
    </BrowserRouter>
  );
}

/** Rejoue l'animation d'entrée (`page-in`) à chaque changement de route. */
function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="page-enter" key={pathname}>
      {children}
    </div>
  );
}
