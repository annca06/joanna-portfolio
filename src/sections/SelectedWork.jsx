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
                  <figure className="work-item__figure">
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

                    {project.description && (
                      <p className="body-text work-item__description">
                        {project.description}
                      </p>
                    )}

                    {(project.role || project.services) && (
                      <dl className="work-item__facts">
                        {project.role && (
                          <div>
                            <dt className="label">Role</dt>
                            <dd>{project.role}</dd>
                          </div>
                        )}
                        {project.services && (
                          <div>
                            <dt className="label">Services</dt>
                            <dd>{project.services}</dd>
                          </div>
                        )}
                      </dl>
                    )}

                    {/* Rendered only once a real case-study URL exists. */}
                    {project.href && (
                      <a className="work-item__link" href={project.href}>
                        <span className="work-item__link-text">
                          {project.cta || 'View Project'}
                        </span>
                        <span className="btn__arrow" aria-hidden="true">
                          &rarr;
                        </span>
                        <span className="visually-hidden"> — {project.title}</span>
                      </a>
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
