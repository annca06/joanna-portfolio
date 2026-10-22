import { projects } from '../content/projects.js';
import Reveal from '../components/Reveal.jsx';
import './SelectedWork.css';

export default function SelectedWork() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <header className="work__head">
          <p className="label label--accent kicker">
            The Work <span aria-hidden="true">—</span> Issue 01
          </p>
          <h2 className="work__title">Selected Projects</h2>
        </header>

        <ol className="work__list">
          {projects.map((project) => (
            <li key={project.volume}>
              <Reveal as="article" className={`work-item work-item--${project.layout}`}>
                {/* Rule line: the volume marker on the left, metadata right */}
                <div className="work-item__head">
                  <p className="work-item__volume">
                    <span className="work-item__volume-label">Vol.</span>
                    <span className="work-item__number">{project.volume}</span>
                  </p>
                  <span className="work-item__hairline" aria-hidden="true" />
                  {project.meta && (
                    <span className="meta work-item__meta">
                      {project.meta.join(' / ')}
                    </span>
                  )}
                </div>

                <div className="work-item__inner grid-12">
                  <figure
                    className={`work-item__figure${
                      project.inset ? ' work-item__figure--inset' : ''
                    }`}
                  >
                    <div className="work-item__plate">
                      <div
                        className={`frame frame--zoom work-item__frame${
                          project.fit === 'full' ? ' work-item__frame--full' : ''
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.alt}
                          loading="lazy"
                          width="1200"
                          height="900"
                        />
                      </div>

                      {/* A phone standing against the corner of the plate.
                          Decorative framing, so it is hung from the plate
                          rather than given a frame of its own. */}
                      {project.inset && (
                        <img
                          className="work-item__inset"
                          src={project.inset.src}
                          alt={project.inset.alt}
                          loading="lazy"
                          width="780"
                          height="1278"
                        />
                      )}
                    </div>
                    {project.caption && (
                      <figcaption className="caption">{project.caption}</figcaption>
                    )}
                  </figure>

                  <div className="work-item__notes">
                    {/* The title doubles as the link once a case study exists. */}
                    <h3 className="work-item__project">
                      {project.href ? (
                        <a className="work-item__project-link" href={project.href}>
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    {project.category && (
                      <p className="work-item__category">{project.category}</p>
                    )}

                    {project.description.map((paragraph) => (
                      <p className="body-text work-item__description" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}

                    {project.facts.length > 0 && (
                      <dl className="work-item__facts">
                        {project.facts.map((fact) => (
                          <div key={fact.label}>
                            <dt className="label">{fact.label}</dt>
                            <dd>{fact.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {/* Rendered only once a real destination exists, so the
                        site never carries a dead link. */}
                    {project.links.length > 0 && (
                      <p className="work-item__links">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            className={`work-item__link${
                              link.external ? ' work-item__link--external' : ''
                            }`}
                            href={link.href}
                            {...(link.external
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                          >
                            <span className="work-item__link-text">{link.label}</span>
                            <span className="btn__arrow" aria-hidden="true">
                              {link.external ? '↗' : '→'}
                            </span>
                            <span className="visually-hidden">
                              {' '}
                              — {project.title}
                              {link.external ? ' (opens in a new tab)' : ''}
                            </span>
                          </a>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
