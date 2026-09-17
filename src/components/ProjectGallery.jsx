import './ProjectGallery.css';

/**
 * An editorial gallery for portrait content.
 *
 * Three staggered columns on desktop, two on tablet, one on mobile. Frames are
 * 9:16 and never crop — a Reel export fills its frame exactly, and a taller
 * phone screenshot sits centred with a little room either side.
 *
 * `items` — [{ numeral, title, src, alt }]
 */
export default function ProjectGallery({ items }) {
  return (
    <ol className="project-gallery">
      {items.map((item) => (
        <li className="project-gallery__item" key={item.title}>
          <figure>
            <div className="frame project-gallery__frame">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width="900"
                height="1600"
              />
            </div>
            <figcaption className="project-gallery__caption">
              <span className="project-gallery__numeral">{item.numeral}</span>
              <span className="project-gallery__title">{item.title}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ol>
  );
}
