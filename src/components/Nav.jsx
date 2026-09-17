import { useEffect, useRef, useState } from 'react';
import { nav, site } from '../content/site.js';
import Brand from './Brand.jsx';
import './Nav.css';

/**
 * `base` prefixes every in-page anchor. Left empty on the homepage, where the
 * sections are on this page; set to '/' on a case study, so "Work" returns to
 * the homepage's Selected Work rather than looking for it here.
 */
export default function Nav({ base = '' }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  /* A hairline appears under the bar once the cover has scrolled away. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* While the mobile menu is open: lock the page and let Escape close it. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav__bar">
        <a className="nav__brand" href={`${base}#top`} onClick={() => setOpen(false)}>
          <Brand />
        </a>

        <nav className="nav__links" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a className="nav__link link-underline" href={`${base}${item.href}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav__toggle-label">{open ? 'Close' : 'Menu'}</span>
          <span className={`nav__toggle-icon${open ? ' is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`nav__panel${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav className="container" aria-label="Primary, mobile">
          <ul>
            {nav.map((item, index) => (
              <li key={item.href} style={{ '--i': index }}>
                <a href={`${base}${item.href}`} onClick={() => setOpen(false)}>
                  <span className="nav__panel-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="meta nav__panel-foot">
            {site.role} — {site.established}
          </p>
        </nav>
      </div>
    </header>
  );
}
