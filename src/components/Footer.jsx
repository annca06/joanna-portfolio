import { contact, contactChannels, site } from '../content/site.js';
import Brand from './Brand.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section--green on-green">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Brand tone="ivory" />
          <p className="label footer__line">
            Digital Marketing <span aria-hidden="true">·</span> {site.established}
          </p>
        </div>

        <nav className="footer__social" aria-label="Elsewhere">
          <ul>
            {contactChannels.map(({ key, label }) => {
              const value = contact[key];
              const href = value ? (key === 'email' ? `mailto:${value}` : value) : null;

              return (
                <li key={key}>
                  {href ? (
                    <a className="link-underline" href={href}>
                      {label}
                    </a>
                  ) : (
                    <span className="footer__social-empty">{label}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
