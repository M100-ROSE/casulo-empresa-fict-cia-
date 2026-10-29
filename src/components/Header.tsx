import type { RefObject } from 'react';
import { Brand } from './Brand';
import { primaryNav } from '../data/site';

interface HeaderProps {
  menuOpen: boolean;
  onOpenMenu: () => void;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
}

export function Header({ menuOpen, onOpenMenu, menuButtonRef }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Brand href="#inicio" label="Casulo — início" />

        <nav className="primary-nav" aria-label="Navegação principal">
          {primaryNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn--small header-cta" href="#agendar">
            Agendar primeira conversa
          </a>
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-label="Abrir menu de navegação"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={onOpenMenu}
          >
            <span>Menu</span>
            <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" focusable="false">
              <path d="M0 1h20M0 7h20M0 13h13" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
