import { CtaArcs } from './art/CtaArcs';
import { contact } from '../data/site';

export function CtaFinal() {
  return (
    <section className="cta-final" id="agendar" aria-labelledby="cta-title">
      <CtaArcs />
      <div className="wrap cta-inner">
        <p className="overline overline--light">Primeira conversa</p>
        <h2 id="cta-title">Vamos começar?</h2>
        <p className="cta-lead">
          Uma conversa de 30 minutos, online ou presencial, sem custo e sem compromisso. Se não
          fizer sentido continuar, tudo bem — a porta continua aberta.
        </p>
        <a className="btn btn--light" href={contact.scheduleHref}>
          Agendar primeira conversa
        </a>
        <p className="cta-alt">
          Prefere escrever? <a href={contact.emailHref}>{contact.email}</a>
        </p>
      </div>
    </section>
  );
}
