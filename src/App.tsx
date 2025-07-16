import { useState, useEffect } from 'react';
import styles from './App.module.css';

// Importação dos componentes de layout persistentes
import { Header } from './moleculas/Header';
import { SocialLinksBar } from './moleculas/SocialLinksBar';
import { Footer } from './moleculas/Footer';

// Importação do nosso wrapper de animação
import { AnimatedSection } from './moleculas/AnimatedSection';

// Importação de todos os organismos (as secções da página)
import { HeroSection } from './organismos/HeroSection';
import { AboutMeSection } from './organismos/AboutMeSection';
import { ProjectsSection } from './organismos/ProjectsSection';
import { ContactSection } from './organismos/ContactSection';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // Adicionamos um container geral e passamos a posição do mouse como variáveis CSS
    <div
      className={styles.appContainer}
      style={
        {
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      <Header />
      <SocialLinksBar />

      <main className={styles.layout}>
        <HeroSection />
        <AnimatedSection>
          <AboutMeSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <ContactSection />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}

export default App;
