import { SectionTitle } from '@/moleculas/SectionTitle';
import { Typography } from '@/atomos/Typography';
import styles from './AboutMeSection.module.css';

// URL de uma imagem de placeholder. Substitua pela sua foto.
const PROFILE_IMAGE_URL = '/images/image copy.png'; // Certifique-se de que esta URL está correta e a imagem existe!

/**
 * AboutMeSection é um organismo que apresenta uma breve introdução
 * sobre o profissional, combinando texto e imagem.
 */
export const AboutMeSection = () => {
  return (
    // Adicione o id="about-section" aqui!
    <section id="about-section" className={styles.aboutContainer}>
      <SectionTitle title="About me" />

      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <Typography as="p" variant="body">
            Hi! I'm [Matheus], a [20] years old brazilian developer. 
            My firs lines of code came early when I was 17 years old, I was
             already advertising in front of the computer. I'm always looking for new horizons
              and launched myself in the IT market in 2023, since then I've been giving life to projects maybe
            <Typography as="span" variant="body" className={styles.highlightText}>
              {' '}I'll be part of yours?
            </Typography>
          </Typography>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={PROFILE_IMAGE_URL}
            alt="Foto de perfil de [Seu Nome]"
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};