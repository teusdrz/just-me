import { Typography } from '@/atomos/Typography';
import styles from './HeroSection.module.css';

// O caminho para a sua foto permanece o mesmo.
const HERO_IMAGE_URL = '/images/foto-principal.png';

const animatedWords = ['creativity', 'respect', 'purpose', 'care', 'love'];

export const HeroSection = () => {
  // A função handleScrollToAbout não é mais necessária, pois usaremos apenas HTML/CSS
  // const handleScrollToAbout = () => {
  //   const aboutSection = document.getElementById('about-section');
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  return (
    <section className={styles.heroContainer}>
      {/* O wrapper ainda é útil para centralizar o grupo de elementos na tela. */}
      <div className={styles.contentWrapper}>
        <img
          src={HERO_IMAGE_URL}
          alt="Sua foto de perfil"
          className={styles.heroImage}
        />

        <Typography as="h1" variant="title" hasGradient className={styles.helloText}>
          Hello
        </Typography>

        <div className={styles.worldWrapper}>
          <Typography as="h1" variant="title" className={styles.worldText}>
            World
          </Typography>
          <div className={styles.animatedTextContainer}>
            {/* Seta VERMELHA (sem animação) */}
            <div className={styles.redArrow}>
              <div className={styles.redArrowLine}></div>
              <div className={styles.redArrowHead}></div>
            </div>
            
            {animatedWords.map((word, index) => (
              <span key={word} className={styles.animatedWord} style={{ animationDelay: `${index * 0.15 + 0.5}s` }}>
                {word}
              </span>
            ))}
            <Typography as="p" variant="body" className={styles.animatedTextSlogan}>
              in every pixel.
            </Typography>
          </div>
        </div>
      </div>

      {/* NOVA Seta para ir para a próxima seção, com animação de "bounce" */}
      {/* Agora um link <a> para scroll suave sem JS */}
      <a href="#about-section" className={`${styles.scrollDownArrow} ${styles.scrollDownLink}`}>
        <div className={styles.scrollDownArrowLine}></div>
        <div className={styles.scrollDownArrowHead}></div>
      </a>
    </section>
  );
};