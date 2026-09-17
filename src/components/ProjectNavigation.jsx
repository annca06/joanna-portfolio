import './ProjectNavigation.css';

/**
 * The foot of a case study: where you were, and the way back to the index.
 *
 * Every entry takes { label, volume, title, href }. While `href` is null the
 * entry is typeset but not linked, so a volume can be listed before its case
 * study exists without the site ever carrying a dead link.
 *
 *   previous / next — the neighbouring volumes
 *   index           — { label, href }, the way back to Selected Work
 */
function Entry({ item, align = 'start' }) {
  const inner = (
    <>
      <span className="label project-nav__label">{item.label}</span>
      <span className="project-nav__title">
        {item.volume && (
          <span className="project-nav__volume">Vol. {item.volume}</span>
        )}
        {item.volume && <span aria-hidden="true"> &mdash; </span>}
        {item.title}
      </span>
    </>
  );

  const classes = `project-nav__entry project-nav__entry--${align}`;

  return item.href ? (
    <a className={`${classes} project-nav__entry--link`} href={item.href}>
      {inner}
    </a>
  ) : (
    <span className={`${classes} project-nav__entry--quiet`}>{inner}</span>
  );
}

export default function ProjectNavigation({ previous, next, index }) {
  return (
    <nav className="project-nav" aria-label="Projects">
      <div className="container project-nav__inner">
        <div className="project-nav__side">
          {previous && <Entry item={previous} />}
        </div>

        <div className="project-nav__side project-nav__side--end">
          {next && <Entry item={next} align="end" />}
          {index && (
            <a className="project-nav__index" href={index.href}>
              <span className="project-nav__index-text">{index.label}</span>
              <span className="btn__arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
