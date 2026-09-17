import { contact, contactChannels } from '../content/site.js';
import Reveal from '../components/Reveal.jsx';
import './Contact.css';

/** Turns a stored value into a usable href, or null while it is still empty. */
function hrefFor(key, value) {
  if (!value) return null;
  return key === 'email' ? `mailto:${value}` : value;
}

export default function Contact() {
  const primaryHref = contact.email ? `mailto:${contact.email}` : '#contact-channels';

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="label label--accent kicker contact__kicker">
          Classifieds <span aria-hidden="true">—</span> Opportunities &amp; Collaborations
        </p>

        <div className="grid-12 contact__inner">
          <Reveal className="contact__pitch">
            <h2 className="contact__title">Have a project in mind?</h2>
            <p className="lead contact__copy">
              If you&rsquo;re looking for support with social media, visual content or
              your digital presence, I&rsquo;d love to hear about it.
            </p>
            <a className="btn btn--primary contact__cta" href={primaryHref}>
              Let&rsquo;s Work Together
              <span className="btn__arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </Reveal>

          <Reveal className="contact__channels" id="contact-channels" delay={90}>
            <dl>
              {contactChannels.map(({ key, label }) => {
                const value = contact[key];
                const href = hrefFor(key, value);

                return (
                  <div className="contact__row" key={key}>
                    <dt className="label">{label}</dt>
                    <dd>
                      {href ? (
                        <a className="link-underline contact__value" href={href}>
                          {value.replace(/^https?:\/\//, '')}
                        </a>
                      ) : (
                        <span className="contact__value contact__value--empty">
                          {contact.placeholders[key]}
                        </span>
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
