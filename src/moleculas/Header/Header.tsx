    import { Typography } from '@/atomos/Typography';
import styles from './Header.module.css';

/**
 * Header é a molécula que fica no topo da página, fornecendo
 * identidade (nome) e navegação principal (contato).
 */
export const Header = () => {
  // Função para rolar suavemente para a secção de contato
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Typography as="span" variant="body" className={styles.name}>
          [Matheus Vinicius]
        </Typography>
        <Typography as="span" variant="body" className={styles.title}>
            Full Stack Developer
        </Typography>
      </div>
      <nav>
        <button className={styles.contactLink} onClick={handleScrollToContact}>
          Contact me
        </button>
      </nav>
    </header>
  );
};
