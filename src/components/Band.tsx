import { BandArt } from './art/BandArt';

export function Band() {
  return (
    <section className="band" aria-labelledby="band-caption">
      <div className="band-art">
        <BandArt />
      </div>
      <div className="wrap band-caption">
        <p id="band-caption">
          Ilustração: a luz do fim de tarde na sala de espera — Rua das Acácias, 214.
        </p>
      </div>
    </section>
  );
}
