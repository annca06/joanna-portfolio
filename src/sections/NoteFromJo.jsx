import { Fragment, useId, useState } from 'react';
import { note } from '../content/note.js';
import { HandArrow, HandCircle } from '../components/Annotations.jsx';
import Reveal from '../components/Reveal.jsx';
import './NoteFromJo.css';

/** Renders text, drawing a hand circle around any [[bracketed]] word. */
function annotate(text) {
  return text.split(/\[\[(.+?)\]\]/g).map((part, index) =>
    index % 2 === 1 ? (
      <span className="note__circled" key={index}>
        {part}
        <HandCircle className="note__circle" />
      </span>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
}

export default function NoteFromJo() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="section note" id="note">
      <div className="container">
        <div className="grid-12 note__inner">
          <Reveal as="figure" className="note__figure">
            <div className="frame note__frame">
              <img
                src={note.image.src}
                alt={note.image.alt}
                loading="lazy"
                width="900"
                height="1125"
              />
            </div>
            {note.image.caption && (
              <figcaption className="caption">{note.image.caption}</figcaption>
            )}
          </Reveal>

          <Reveal className="note__text" delay={90}>
            <h2 className="note__heading">A Note from Jo</h2>

            <p className="script note__greeting">
              {note.greeting}
              <HandArrow className="note__arrow" />
            </p>

            <h3 className="note__name">{note.heading}</h3>

            <p className="note__intro">{annotate(note.intro)}</p>

            <button
              className="link-standing note__cta"
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? 'Close the note' : 'Read My Note'}{' '}
              <span aria-hidden="true">{open ? '↑' : '→'}</span>
            </button>

            <div
              id={panelId}
              className={`note__more${open ? ' is-open' : ''}`}
              inert={open ? undefined : true}
            >
              <div>
                <div className="note__more-inner">
                  {note.more.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <p className="script note__signature">{note.signature}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
