import './ProjectMetrics.css';

/**
 * Figures, set as a plain reading table rather than a scoreboard.
 *
 * Deliberately understated: no oversized numerals, no percentages, no deltas,
 * nothing that would turn a small set of observations into a claim. Whatever
 * is in `reels` is what is shown — see content/psycoffee.js.
 *
 * `reels`          — [{ title, metrics: [{ label, value }] }]
 * `interpretation` — the cautious reading of the figures, or null
 */
export default function ProjectMetrics({ reels, interpretation }) {
  return (
    <div className="project-metrics">
      <div className="project-metrics__grid">
        {reels.map((reel) => (
          <article className="project-metrics__reel" key={reel.title}>
            <h3 className="project-metrics__reel-title">{reel.title}</h3>

            <dl className="project-metrics__list">
              {reel.metrics.map((metric) => (
                <div className="project-metrics__row" key={metric.label}>
                  <dt className="label">{metric.label}</dt>
                  <dd className="project-metrics__value">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      {interpretation && (
        <p className="project-metrics__note">{interpretation}</p>
      )}
    </div>
  );
}
