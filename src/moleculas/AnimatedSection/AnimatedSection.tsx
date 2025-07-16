import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './AnimatedSection.module.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string; // Permite passar um ID para a secção
}

/**
 * AnimatedSection é uma molécula que aplica uma animação de "fade-in"
 * aos seus filhos quando a secção se torna visível na tela.
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id }) => {
  const [containerRef, isVisible] = useIntersectionObserver({
    threshold: 0.1, // A animação começa quando 10% do elemento está visível
  });

  const sectionClassName = `
    ${styles.section}
    ${isVisible ? styles.visible : ''}
  `;

  return (
    <section ref={containerRef} className={sectionClassName} id={id}>
      {children}
    </section>
  );
};
