import React, { LabelHTMLAttributes } from 'react';
import styles from './Label.module.css';

// A interface estende as propriedades padrão de um <label> do HTML.
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * O conteúdo de texto do rótulo.
   */
  children: React.ReactNode;
}

/**
 * Label é um átomo usado para rotular campos de formulário.
 * O seu uso é crucial para a acessibilidade, pois associa
 * o texto do rótulo a um campo de entrada específico.
 */
export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label className={styles.labelBase} {...props}>
      {children}
    </label>
  );
};
