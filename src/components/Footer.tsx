import { Brand } from './Brand';
import { contact, footerNav } from '../data/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Brand hidden />
          <p className="footer-tagline">Um lugar para pousar.</p>
          <p className="footer-about">
            Clínica de psicologia e cuidado integral, na Vila Madalena, desde 2017.
          </p>
        </div>

        <nav className="footer-col" aria-label="Navegação do rodapé">
          <h2 className="footer-title">Navegar</h2>
          <ul className="footer-links">
            {footerNav.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-title">Contato</h2>
          <address className="footer-address">
            {contact.addressLine1}
            <br />
            {contact.addressLine2}
          </address>
          <ul className="footer-links">
            <li>
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                aria-label="Casulo no Instagram (abre em nova aba)"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-title">Horários</h2>
          <p className="footer-hours">
            Segunda a sexta
            <br />8h às 20h
          </p>
          <p className="footer-hours">
            Sábado
            <br />8h às 13h
          </p>
          <p className="footer-crp">{contact.crp}</p>
        </div>
      </div>

      <div className="wrap">
        <p className="cvv-note">
          <strong>Se você está em crise agora</strong>, ligue para o CVV — atendimento 24h e
          gratuito.
        </p>
      </div>

      <div className="wrap footer-bottom">
        <p>© 2026 Casulo · {contact.crp}</p>
        <ul className="footer-legal">
          <li>
            <a href="#">Privacidade</a>
          </li>
          <li>
            <a href="#">Acessibilidade</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
