import Reveal from './Reveal.jsx';
import './ProjectSection.css';

/**
 * One numbered chapter of a case study.
 *
 * A hairline, an understated numeral, an uppercase serif heading, then the
 * content — the same shell every section on a project page sits inside, so
 * the page keeps one rhythm from top to bottom.
 *
 *   <ProjectSection index="01" title="The Idea">…</ProjectSection>
 *
 * `tone="green"` reverses it onto the deep green ground for a section that
 * needs to read as a larger visual moment.
 */
export default function ProjectSection({
  index,
  title,
  id,
  tone = 'ivory',
  className = '',
  children,
}) {
  const classes = [
    'section',
    'project-section',
    tone === 'green' ? 'section--green on-green' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} id={id}>
      <div className="container">
        <header className="project-section__head">
          {index && <span className="project-section__index">{index}</span>}
          <h2 className="project-section__title">{title}</h2>
        </header>

        <Reveal className="project-section__body">{children}</Reveal>
      </div>
    </section>
  );
}
