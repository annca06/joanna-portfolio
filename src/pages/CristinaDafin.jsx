import { cristinaDafin, cristinaDafinNav } from '../content/cristina-dafin.js';

import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import ProjectHero from '../components/ProjectHero.jsx';
import ProjectSection from '../components/ProjectSection.jsx';
import ProjectNavigation from '../components/ProjectNavigation.jsx';

import './CristinaDafin.css';

/* ==========================================================================
   VOL. 01 — CRISTINA DAFIN
   The page is only a running order. Every word lives in
   src/content/cristina-dafin.js; every shell is a component in src/components.
   ========================================================================== */

export default function CristinaDafin() {
  const { vision, approach, experience, behindTheScenes, result, details } = cristinaDafin;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* base="/joanna-portfolio/" so the shared nav points back at the
          homepage's anchors rather than looking for them on this page. */}
      <Nav base="/joanna-portfolio/" />

      <main id="main" className="cristina">
        <ProjectHero
          volume={cristinaDafin.volume}
          title={cristinaDafin.title}
          category={cristinaDafin.category}
          intro={cristinaDafin.intro}
          image={cristinaDafin.heroImage}
        />

        {/* ---------- 01 — The Vision ---------- */}
        <ProjectSection index="01" title="The Vision" id="vision">
          <div className="project-prose project-prose--columns">
            {vision.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ProjectSection>

        {/* ---------- 02 — The Approach ---------- */}
        <ProjectSection index="02" title="The Approach" id="approach">
          <div className="project-prose project-prose--feature">
            <p>{approach.intro}</p>
          </div>

          <ol className="cristina__approach">
            {approach.items.map((item) => (
              <li className="cristina__step" key={item.number}>
                <span className="cristina__step-number">{item.number}</span>
                <div className="cristina__step-body">
                  <h3 className="cristina__step-title">{item.title}</h3>
                  <p className="cristina__step-copy">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </ProjectSection>

        {/* ---------- 03 — The Digital Experience ---------- */}
        <ProjectSection index="03" title="The Digital Experience" id="experience">
          <div className="project-prose">
            <p>{experience.intro}</p>
          </div>

          <ol className="cristina__plates">
            {experience.plates.map((plate) => (
              <li className="cristina__plate" key={plate.numeral}>
                <figure>
                  <div className="frame cristina__plate-frame">
                    <img
                      src={plate.src}
                      alt={plate.alt}
                      loading="lazy"
                      width="1000"
                      height="1000"
                    />
                  </div>
                  <figcaption className="cristina__plate-caption">
                    <span className="cristina__plate-numeral">{plate.numeral}</span>
                    <span className="cristina__plate-title">{plate.title}</span>
                    {plate.note && (
                      <span className="cristina__plate-note">{plate.note}</span>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </ProjectSection>

        {/* ---------- 04 — Behind the Scenes ---------- */}
        <ProjectSection index="04" title="Behind the Scenes" id="behind" tone="green">
          <div className="project-prose project-prose--feature">
            <p>{behindTheScenes.intro}</p>
          </div>

          <ol className="cristina__stack">
            {behindTheScenes.stack.map((tool) => (
              <li className="cristina__tool" key={tool.name}>
                <span className="cristina__tool-numeral">{tool.numeral}</span>
                <h3 className="cristina__tool-name">{tool.name}</h3>
                <p className="label cristina__tool-role">{tool.role}</p>
                <p className="cristina__tool-copy">{tool.description}</p>
              </li>
            ))}
          </ol>

          <p className="cristina__stack-note">{behindTheScenes.note}</p>
        </ProjectSection>

        {/* ---------- 05 — The Final Result ---------- */}
        <ProjectSection index="05" title="The Final Result" id="result">
          <div className="cristina__result">
            <p className="cristina__result-statement">{result.statement}</p>

            <div className="cristina__result-aside">
              <p className="cristina__result-note">{result.note}</p>

              <a
                className="cristina__result-link"
                href={result.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cristina__result-link-text">{result.link.label}</span>
                <span className="btn__arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>

              <p className="meta cristina__result-url">{result.link.display}</p>
            </div>
          </div>
        </ProjectSection>

        {/* ---------- The colophon ---------- */}
        <section className="cristina__details" aria-label="Project details">
          <div className="container">
            <dl className="cristina__details-grid">
              {details.map((detail) => (
                <div className="cristina__detail" key={detail.label}>
                  <dt className="label">{detail.label}</dt>
                  <dd className="cristina__detail-value">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <ProjectNavigation next={cristinaDafinNav.next} index={cristinaDafinNav.index} />
      </main>

      <Footer />
    </>
  );
}
