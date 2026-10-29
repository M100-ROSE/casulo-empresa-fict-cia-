import { ArrowIcon } from './ArrowIcon';
import { therapies } from '../data/site';

export function Therapies() {
  return (
    <section className="therapies section" id="terapias" aria-labelledby="therapies-title">
      <div className="wrap">
        <div className="section-head section-head--split">
          <div>
            <p className="overline">Para quem</p>
            <h2 id="therapies-title">Terapia para o que pesa no dia a dia.</h2>
          </div>
          <p className="section-intro">
            Não é preciso ter um diagnóstico para procurar ajuda. Estes são alguns dos motivos que
            trazem pessoas até a Casulo.
          </p>
        </div>

        <div className="therapy-grid">
          {therapies.map((therapy) => (
            <article className="therapy-card reveal" key={therapy.title}>
              <p className="symptom">{therapy.symptom}</p>
              <h3>{therapy.title}</h3>
              <p>{therapy.text}</p>
              <a className="card-link" href="#agendar">
                {therapy.linkLabel}
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
