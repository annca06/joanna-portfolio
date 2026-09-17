import Reveal from './Reveal.jsx';
import './ProjectHero.css';

/**
 * The opening spread of a case study.
 *
 * A publication rail, the volume marker, the project title at display size,
 * the category line, the introduction, and one large plate beneath it all.
 *
 * `image` takes the same shape as every other image on the site:
 *   { src, alt, caption }   — drop `caption` and none is rendered.
 */
export default function ProjectHero({
  volume,
  title,
  category,
  intro,
  image,
  backLabel = 'Work',
  backHref = '/#work',
  railEnd = 'Case Study',
}) {
  return (
    <header className="project-hero" id="top">
      <div className="container">
        <div className="project-hero__rail">
          <a className="label project-hero__back" href={backHref}>
            <span aria-hidden="true">&larr;</span> {backLabel}
          </a>
          <span className="label project-hero__rail-end">{railEnd}</span>
        </div>

        <p className="project-hero__volume">
          <span className="project-hero__volume-label">Vol.</span>
          <span className="project-hero__number">{volume}</span>
        </p>

        <h1 className="project-hero__title">{title}</h1>

        {category && <p className="label project-hero__category">{category}</p>}

        {intro && (
          <div className="project-hero__body grid-12">
            <Reveal className="project-hero__intro">
              <p className="lead">{intro}</p>
            </Reveal>
          </div>
        )}

        {image && (
          <Reveal as="figure" className="project-hero__visual" delay={80}>
            <div className="frame project-hero__frame">
              <img src={image.src} alt={image.alt} width="1600" height="900" />
            </div>
            {image.caption && (
              <figcaption className="caption">{image.caption}</figcaption>
            )}
          </Reveal>
        )}
      </div>
    </header>
  );
}
