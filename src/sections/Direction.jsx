import { directionImages } from '../content/services.js';
import Reveal from '../components/Reveal.jsx';
import './Direction.css';

export default function Direction() {
  return (
    <section className="section section--green direction on-green" id="direction">
      <div className="container">
        <div className="grid-12 direction__head">
          <Reveal className="direction__headline">
            <p className="label kicker direction__kicker">Direction</p>
            <h2 className="direction__title">
              Lifestyle. Luxury. <span className="direction__title-last">Sport.</span>
            </h2>
          </Reveal>

          <Reveal className="direction__copy" delay={90}>
            <p className="lead">
              I&rsquo;m especially drawn to brands shaped by culture, identity and
              experience — from lifestyle and hospitality to tennis and motorsport.
            </p>
          </Reveal>
        </div>

        <Reveal className="direction__strip" delay={120}>
          {directionImages.map((image) => (
            <figure className="direction__item" key={image.src}>
              <div className="frame direction__frame">
                <img src={image.src} alt={image.alt} loading="lazy" width="800" height="1000" />
              </div>
              {image.caption && (
                <figcaption className="caption">{image.caption}</figcaption>
              )}
            </figure>
          ))}
        </Reveal>

        <p className="meta direction__disclaimer">
          Reference &amp; direction <span aria-hidden="true">—</span> imagery shown for
          interest and tone, not client work.
        </p>
      </div>
    </section>
  );
}
