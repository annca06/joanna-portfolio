import { site } from '../content/site.js';
import Reveal from '../components/Reveal.jsx';
import './Hero.css';

const letters = site.name.toUpperCase().split('');

/* ==========================================================================
   THE CIPHER — the small mark on the EST. line
   ==========================================================================

   ┌────────────────────────────────────────────────────────────────────┐
   │  TO USE YOUR OWN MARK HERE                                         │
   │                                                                    │
   │  1. Put the file in `public/`   →  public/logo.svg                 │
   │  2. Set CIPHER_SRC below        →  const CIPHER_SRC = '/logo.svg'  │
   │  3. Adjust CIPHER_HEIGHT to taste                                  │
   │                                                                    │
   │  While CIPHER_SRC is an empty string the typeset JO monogram is    │
   │  used, so the line never shows a gap or a broken image.            │
   └────────────────────────────────────────────────────────────────────┘

   This is a separate mark from the header and footer wordmark, which lives
   in components/Brand.jsx.
   ========================================================================== */
const CIPHER_SRC = '/logo.svg';
const CIPHER_HEIGHT = 40; // px — the one number to change if the mark reads
//                          too large or too small between the hairlines.

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        {/* The publication rail that runs across the top of the cover */}
        <div className="hero__rail">
          <span className="label">Digital Marketing Portfolio</span>
          <span className="label hero__rail-end">
            Issue 01 <span aria-hidden="true">—</span> {site.established}
          </span>
        </div>

        {/* Masthead. Letters are justified across the measure like a
            newspaper nameplate; the accessible name stays intact. */}
        <h1 className="hero__masthead" aria-label={site.name}>
          {letters.map((letter, index) => (
            <span key={`${letter}-${index}`} aria-hidden="true">
              {letter}
            </span>
          ))}
        </h1>

        <div className="hero__strapline">
          <p className="script hero__script">{site.role}</p>
          <p className="label hero__disciplines">
            {site.disciplines.join(' · ')}
          </p>
        </div>

        <div className="hero__body grid-12">
          <Reveal className="hero__intro" delay={80}>
            <p className="lead hero__summary">{site.summary}</p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#work">
                View Selected Work
              </a>
              <a className="hero__secondary" href="#contact">
                <span className="hero__secondary-text">Let&rsquo;s Work Together</span>
                <span className="btn__arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>

            {/* Heritage line. The cipher sits quietly between two hairlines
                beside the date — a mark if one is set, otherwise the
                typeset monogram. */}
            <p className="hero__est">
              <span className="label">Est.</span>
              <span className={`hero__cipher${CIPHER_SRC ? ' hero__cipher--mark' : ''}`}>
                {CIPHER_SRC ? (
                  <img
                    className="hero__cipher-image"
                    src={CIPHER_SRC}
                    alt={site.name}
                    style={{ height: `${CIPHER_HEIGHT}px` }}
                  />
                ) : (
                  'JO'
                )}
              </span>
              <span className="label">{site.established}</span>
            </p>
          </Reveal>

          <Reveal className="hero__figure" delay={160}>
            <figure>
              <div className="frame frame--zoom hero__frame">
                <img
                  src={site.heroImage.src}
                  alt={site.heroImage.alt}
                  width="900"
                  height="1200"
                />
              </div>
              {site.heroImage.caption && (
                <figcaption className="caption">{site.heroImage.caption}</figcaption>
              )}
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
