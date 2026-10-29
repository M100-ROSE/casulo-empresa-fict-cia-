import { useCallback, useRef, useState } from 'react';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { Steps } from './components/Steps';
import { Therapies } from './components/Therapies';
import { Cred } from './components/Cred';
import { Band } from './components/Band';
import { Team } from './components/Team';
import { Manifesto } from './components/Manifesto';
import { Faq } from './components/Faq';
import { Local } from './components/Local';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { MobileCta } from './components/MobileCta';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const openMenu = useCallback(() => setMenuOpen(true), []);

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus();
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <Header menuOpen={menuOpen} onOpenMenu={openMenu} menuButtonRef={menuButtonRef} />
      <MobileMenu open={menuOpen} onClose={closeMenu} />

      <main id="conteudo">
        <Hero />
        <Steps />
        <Therapies />
        <Cred />
        <Band />
        <Team />
        <Manifesto />
        <Faq />
        <Local />
        <CtaFinal />
      </main>

      <Footer />
      <MobileCta />
    </>
  );
}
