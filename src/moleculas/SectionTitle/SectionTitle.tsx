import React from 'react';
// Importa o nosso átomo Typography. Note o uso do atalho '@' que configurámos.
import { Typography } from '@/atomos/Typography';
import styles from './SectionTitle.module.css';

/**
 * Interface para as propriedades do componente SectionTitle.
 */
interface SectionTitleProps {
  /**
   * O texto do título a ser exibido.
   */
  title: string;
}

/**
 * SectionTitle é uma molécula que compõe o título padrão para cada
 * secção principal da página. Ela combina o átomo Typography com um
 * elemento decorativo para criar uma identidade visual consistente.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <Typography as="h2" variant="title" hasGradient>
        {title}
      </Typography>
      <div className={styles.divider}></div>
    </div>
  );
};
