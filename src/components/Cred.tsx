import { credFacts } from '../data/site';

export function Cred() {
  return (
    <section className="cred" aria-label="A clínica em números">
      <div className="wrap cred-grid">
        {credFacts.map((fact) => (
          <div className="cred-item" key={fact.label}>
            <p className={fact.small ? 'cred-num cred-num--small' : 'cred-num'}>{fact.value}</p>
            <p className="cred-label">{fact.label}</p>
          </div>
        ))}
        <p className="cred-note">
          Todos com formação clínica, supervisão semanal e atendimento em Libras sob agendamento.
        </p>
      </div>
    </section>
  );
}
