import { HeroArt } from './art/HeroArt';
import { contact } from '../data/site';

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="overline">Psicologia clínica · São Paulo</p>
          <h1 id="hero-title">
            <span>Você não precisa</span> <span>dar conta sozinho.</span>
          </h1>
          <p className="lead">
            Uma clínica de psicologia na Vila Madalena, para adultos, casais e famílias. A primeira
            conversa dura 30 minutos — online ou presencial — e não custa nada.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#agendar">
              Agendar primeira conversa
            </a>
            <a className="btn btn--ghost" href="#terapias">
              Conhecer as terapias
            </a>
          </div>
          <p className="hero-note">
            <span className="dot" aria-hidden="true"></span> Atendimento online e presencial ·
            primeira conversa sem custo
          </p>
        </div>

        <div className="hero-art">
          <figure className="hero-figure">
            <HeroArt />
          </figure>
          <p className="art-note">
            <span className="overline">{contact.crp}</span>
            <span>Clínica desde 2017, na Vila Madalena</span>
          </p>
        </div>
      </div>
    </section>
  );
}
