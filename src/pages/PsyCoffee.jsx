import { psycoffee, psycoffeeNav } from '../content/psycoffee.js';

import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import ProjectHero from '../components/ProjectHero.jsx';
import ProjectSection from '../components/ProjectSection.jsx';
import ProjectGallery from '../components/ProjectGallery.jsx';
import ProjectMetrics from '../components/ProjectMetrics.jsx';
import ProjectNavigation from '../components/ProjectNavigation.jsx';

import './PsyCoffee.css';

/* ==========================================================================
   VOL. 03 — THE PSYCOFFEE
   The page is only a running order. Every word lives in
   src/content/psycoffee.js; every shell is a component in src/components.
   ========================================================================== */

/* i, ii, iii … derived from the order, so the list can be reordered or added
   to without any numbering to keep in sync by hand. */
function roman(n) {
  const table = [
    [10, 'x'],
    [9, 'ix'],
    [5, 'v'],
    [4, 'iv'],
    [1, 'i'],
  ];
  let remaining = n;
  let out = '';
  for (const [value, numeral] of table) {
    while (remaining >= value) {
      out += numeral;
      remaining -= value;
    }
  }
  return out;
}

export default function PsyCoffee() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* base="/" so the shared nav points back at the homepage's anchors
          rather than looking for them on this page. */}
      <Nav base="/" />

      <main id="main" className="psycoffee">
        <ProjectHero
          volume={psycoffee.volume}
          title={psycoffee.title}
          category={psycoffee.category}
          intro={psycoffee.intro}
          image={psycoffee.heroImage}
        />

        {/* ---------- 01 — The Idea ---------- */}
        <ProjectSection index="01" title="The Idea" id="idea">
          <div className="project-prose project-prose--columns">
            {psycoffee.idea.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ProjectSection>

        {/* ---------- 02 — The Objective ---------- */}
        <ProjectSection index="02" title="The Objective" id="objective">
          <div className="project-prose project-prose--feature">
            <p>{psycoffee.objective.intro}</p>
          </div>

          <ol className="psycoffee__objectives">
            {psycoffee.objective.items.map((item) => (
              <li className="psycoffee__objective" key={item.number}>
                <span className="psycoffee__objective-number">{item.number}</span>
                <h3 className="psycoffee__objective-title">{item.title}</h3>
                <p className="psycoffee__objective-copy">{item.description}</p>
              </li>
            ))}
          </ol>
        </ProjectSection>

        {/* ---------- 03 — The Audience ---------- */}
        <ProjectSection index="03" title="The Audience" id="audience">
          <div className="project-prose project-prose--inset">
            {psycoffee.audience.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ProjectSection>

        {/* ---------- 04 — Brand Direction ---------- */}
        <ProjectSection index="04" title="Brand Direction" id="direction" tone="green">
          <ul className="psycoffee__traits">
            {psycoffee.brandDirection.traits.map((trait) => (
              <li className="psycoffee__trait" key={trait}>
                {trait}
              </li>
            ))}
          </ul>

          <p className="psycoffee__traits-note">{psycoffee.brandDirection.note}</p>
        </ProjectSection>

        {/* ---------- 05 — Content Pillars ---------- */}
        <ProjectSection index="05" title="Content Pillars" id="pillars">
          <ol className="psycoffee__pillars">
            {psycoffee.pillars.map((pillar) => (
              <li className="psycoffee__pillar" key={pillar.numeral}>
                <span className="psycoffee__pillar-numeral">{pillar.numeral}</span>
                <div className="psycoffee__pillar-body">
                  <h3 className="psycoffee__pillar-title">{pillar.title}</h3>
                  <p className="psycoffee__pillar-copy">{pillar.description}</p>
                  {pillar.examples && (
                    <p className="psycoffee__pillar-examples">{pillar.examples}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </ProjectSection>

        {/* ---------- 06 — My Role ---------- */}
        <ProjectSection index="06" title="My Role" id="role">
          <ol className="psycoffee__role">
            {psycoffee.role.map((item, i) => (
              <li className="psycoffee__role-item" key={item}>
                <span className="psycoffee__role-number">{roman(i + 1)}.</span>
                <span className="psycoffee__role-title">{item}</span>
              </li>
            ))}
          </ol>
        </ProjectSection>

        {/* ---------- 07 — Selected Work ---------- */}
        <ProjectSection index="07" title="Selected Work" id="selected-work">
          <ProjectGallery items={psycoffee.gallery} />
        </ProjectSection>

        {/* ---------- 08 — Early Insights ---------- */}
        <ProjectSection index="08" title="Early Insights" id="insights">
          <ProjectMetrics
            reels={psycoffee.insights.reels}
            interpretation={psycoffee.insights.interpretation}
          />
        </ProjectSection>

        {/* ---------- 09 — The Takeaway ---------- */}
        <ProjectSection index="09" title="The Takeaway" id="takeaway">
          <div className="project-prose psycoffee__takeaway">
            {psycoffee.takeaway.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ProjectSection>

        {/* ---------- The colophon ---------- */}
        <section className="psycoffee__details" aria-label="Project details">
          <div className="container">
            <dl className="psycoffee__details-grid">
              {psycoffee.details.map((detail) => (
                <div className="psycoffee__detail" key={detail.label}>
                  <dt className="label">{detail.label}</dt>
                  <dd className="psycoffee__detail-value">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <ProjectNavigation
          previous={psycoffeeNav.previous}
          index={psycoffeeNav.index}
        />
      </main>

      <Footer />
    </>
  );
}
