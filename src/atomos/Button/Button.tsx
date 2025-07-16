import React from 'react';
import styles from './Button.module.css';

/**
 * Interface para as propriedades do componente Button.
 */
interface ButtonProps {
  /**
   * O conteúdo a ser exibido dentro do botão.
   */
  children: React.ReactNode;
  /**
   * A função a ser executada quando o botão é clicado.
   */
  onClick?: () => void;
  /**
   * O tipo nativo do botão HTML.
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * A variante de estilo do botão.
   */
  variant?: 'primary';
  /**
   * Desativa o botão, impedindo interações.
   */
  disabled?: boolean;
}

/**
 * Button é um átomo fundamental para ações do usuário, como o envio de formulários.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}) => {
  // Constrói a lista de classes CSS, combinando a classe base com a variante.
  const buttonClassName = `${styles.button} ${styles[variant]}`;

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
