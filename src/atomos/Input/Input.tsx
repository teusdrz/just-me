import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css';

// Define os tipos de propriedades que podem ser passadas para o componente.
// Usamos a união de tipos para aceitar propriedades de input e textarea.
type InputProps =
  | ({ as?: 'input' } & InputHTMLAttributes<HTMLInputElement>)
  | ({ as: 'textarea' } & TextareaHTMLAttributes<HTMLTextAreaElement>);

/**
 * Input é um átomo para campos de entrada de formulário.
 * Ele é projetado para ser estilisticamente consistente e flexível,
 * adaptando-se para ser um input padrão ou uma textarea.
 */
export const Input: React.FC<InputProps> = ({ as: Component = 'input', ...props }) => {
  return (
    <Component
      className={styles.inputBase}
      {...(props as any)} // Usamos 'as any' para contornar uma limitação de tipo do TypeScript aqui
    />
  );
};
