import { steps } from '../data/site';

export function Steps() {
  return (
    <section className="steps section" id="como-funciona" aria-labelledby="steps-title">
      <div className="wrap">
        <div className="section-head">
          <p className="overline">Como funciona</p>
          <h2 id="steps-title">Antes de qualquer compromisso, uma conversa.</h2>
          <p className="section-intro">
            A primeira conversa existe para você sentir se faz sentido continuar. Nada é decidido
            antes de você estar pronto.
          </p>
        </div>

        <ol className="steps-list">
          {steps.map((step) => (
            <li className="step reveal" key={step.number}>
              <span className="step-num" aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
