import { ArrowIcon } from './ArrowIcon';
import { team } from '../data/site';

export function Team() {
  return (
    <section className="team section" id="equipe" aria-labelledby="team-title">
      <div className="wrap">
        <div className="section-head section-head--split">
          <div>
            <p className="overline">Equipe</p>
            <h2 id="team-title">Quem vai te escutar.</h2>
          </div>
          <p className="section-intro">
            Uma equipe pequena e estável: quem te recebe na primeira conversa é quem segue com você.
          </p>
        </div>

        <ul className="team-grid">
          {team.map((person) => (
            <li className="person reveal" key={person.name}>
              <div
                className={`portrait portrait--${person.portrait}`}
                aria-hidden="true"
              >
                <span>{person.initial}</span>
              </div>
              <div className="person-info">
                <h3>{person.name}</h3>
                <p className="crp">{person.crp}</p>
                <p className="person-area">{person.area}</p>
                <ul className="tags">
                  {person.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <p className="team-all">
          <a className="link-arrow" href="#">
            Ver toda a equipe
            <ArrowIcon />
          </a>
        </p>
      </div>
    </section>
  );
}
