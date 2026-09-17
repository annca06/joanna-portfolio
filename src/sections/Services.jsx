import { services, industries, industriesNote } from '../content/services.js';
import Reveal from '../components/Reveal.jsx';
import './Services.css';

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <header className="services__head grid-12">
          <p className="label label--accent services__kicker">The Digital Club</p>
          <h2 className="services__title">What I Do</h2>
        </header>

        <ol className="services__list">
          {services.map((service, index) => (
            <li key={service.number}>
              <Reveal className="service" delay={index * 70}>
                <span className="service__number">{service.number}</span>
                <h3 className="service__title">{service.title}</h3>
                <p className="service__description">{service.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="services__industries">
          <p className="services__industry-list">
            {industries.map((industry) => industry.toUpperCase()).join(' · ')}
          </p>
          <p className="services__industry-note">{industriesNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
