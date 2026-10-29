import { ArrowIcon } from './ArrowIcon';
import { MapArt } from './art/MapArt';
import { contact, localFacts } from '../data/site';

export function Local() {
  return (
    <section className="local" id="local" aria-labelledby="local-title">
      <div className="wrap local-grid">
        <div className="local-info">
          <p className="overline">Onde estamos</p>
          <h2 id="local-title">A casa na Vila Madalena.</h2>
          <p className="local-lead">
            A clínica funciona em uma casa na Vila Madalena, com sala de espera, jardim e
            consultórios individuais.
          </p>
          <address>
            {contact.addressLine1}
            <br />
            {contact.addressLine2}
          </address>

          <dl className="local-facts">
            {localFacts.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.description}</dd>
              </div>
            ))}
          </dl>

          <a className="link-arrow" href="#agendar">
            Agendar uma visita
            <ArrowIcon />
          </a>
        </div>

        <figure className="local-map">
          <MapArt />
          <figcaption>A 8 minutos a pé do metrô Fradique Coutinho.</figcaption>
        </figure>
      </div>
    </section>
  );
}
