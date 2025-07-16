import React from 'react';
import styles from './Typography.module.css';

/**
 * Interface para as propriedades do componente Typography.
 */
interface TypographyProps {
  /**
   * O conteúdo de texto a ser renderizado.
   */
  children: React.ReactNode;
  /**
   * A tag HTML a ser usada para o elemento de texto.
   * Padrão: 'p' (parágrafo).
   */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /**
   * A variante de estilo a ser aplicada, definida no CSS module.
   * 'title' para títulos principais, 'subtitle' para subtítulos, 'body' para texto normal.
   */
  variant?: 'title' | 'subtitle' | 'body';
  /**
   * Se verdadeiro, aplica o efeito de gradiente especial aos textos.
   */
  hasGradient?: boolean;
  /**
   * Permite passar classes CSS externas para estilização adicional.
   * ESTA É A ADIÇÃO QUE CORRIGE O ERRO.
   */
  className?: string;
}

/**
 * Typography é um átomo para renderizar todo o texto da aplicação.
 * Centralizar a tipografia em um componente garante consistência visual
 * e facilita a manutenção do design.
 */
export const Typography: React.FC<TypographyProps> = ({
  children,
  as: Component = 'p',
  variant = 'body',
  hasGradient = false,
  className = '', // Define um valor padrão para a nova propriedade
}) => {
  // Constrói a lista de classes CSS dinamicamente.
  // Combina as classes internas com qualquer classe externa que for passada.
  const typographyClassName = `
    ${styles[variant]}
    ${hasGradient ? styles.gradient : ''}
    ${className}
  `.trim(); // .trim() remove espaços em branco extras

  return (
    <Component className={typographyClassName}>
      {children}
    </Component>
  );
};
