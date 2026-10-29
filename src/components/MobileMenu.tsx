import { useEffect, useRef } from 'react';
import { Brand } from './Brand';
import { contact, menuNav } from '../data/site';

interface MobileMenuProps {
  open: boolean;
  onClose: (restoreFocus?: boolean) => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const closeButton = panel.querySelector<HTMLButtonElement>('[data-menu-close]');
    closeButton?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Acima de 900px o menu deixa de existir no CSS: fecha para não deixar o
    // body com overflow travado quando a janela é redimensionada.
    const desktopQuery = window.matchMedia('(min-width: 900px)');
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose(true);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', handleDesktop);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', handleDesktop);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      className={open ? 'menu-panel menu-panel--open' : 'menu-panel'}
      id="menu-mobile"
      ref={panelRef}
      role="dialog"
      aria-modal={open ? true : undefined}
      aria-label="Menu de navegação"
      hidden={!open}
    >
      <div className="menu-top wrap">
        <Brand hidden />
        <button
          className="menu-close"
          type="button"
          data-menu-close
          onClick={() => onClose(true)}
        >
          <span>Fechar</span>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M1 1l14 14M15 1L1 15" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      <nav className="menu-nav wrap" aria-label="Menu principal">
        {menuNav.map((item) => (
          <a key={item.href} className="menu-link" href={item.href} onClick={() => onClose()}>
            <span className="menu-index" aria-hidden="true">
              {item.index}
            </span>{' '}
            {item.label}
          </a>
        ))}
        <a className="btn menu-cta" href="#agendar" onClick={() => onClose()}>
          Agendar primeira conversa
        </a>
      </nav>

      <div className="menu-foot wrap">
        <p>{contact.menuAddress}</p>
        <p>
          <a href={contact.emailHref}>{contact.email}</a>
        </p>
        <p className="menu-cvv">Em crise agora? Ligue para o CVV — atendimento 24h, gratuito.</p>
      </div>
    </div>
  );
}
