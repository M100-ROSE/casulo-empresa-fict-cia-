import { ArrowIcon } from './ArrowIcon';
import { faq } from '../data/site';

export function Faq() {
  return (
    <section className="faq section" id="duvidas" aria-labelledby="faq-title">
      <div className="wrap faq-layout">
        <div className="faq-intro">
          <p className="overline">Dúvidas</p>
          <h2 id="faq-title">Antes de dar o primeiro passo.</h2>
          <p>
            Se a sua pergunta não estiver aqui, escreva para a gente. Respondemos em até um dia útil.
          </p>
          <a className="link-arrow" href="#agendar">
            Falar com a equipe
            <ArrowIcon />
          </a>
        </div>

        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true"></span>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
