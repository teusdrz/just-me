import React from 'react';
import { Input } from '@/atomos/Input';
import { Label } from '@/atomos/Label';
import styles from './FormField.module.css';

// Reutiliza o tipo do nosso átomo Input e adiciona as novas propriedades.
type FormFieldProps = React.ComponentProps<typeof Input> & {
  label: string;
  id: string;
};

/**
 * FormField é uma molécula que agrupa um Label e um Input,
 * criando um campo de formulário completo e reutilizável.
 * Esta é uma prática essencial para construir formulários complexos de forma limpa.
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  ...inputProps // Pega todas as outras propriedades (type, placeholder, etc.)
}) => {
  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...inputProps} />
    </div>
  );
};
