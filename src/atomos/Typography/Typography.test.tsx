import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Typography } from './Typography';

describe('Typography Component', () => {
  it('should render text with the correct tag', () => {
    // Renderiza o componente como um h1
    render(<Typography as="h1">Meu Título</Typography>);

    // Procura por um elemento com o role 'heading' de nível 1 e o texto 'Meu Título'
    const headingElement = screen.getByRole('heading', { level: 1, name: /Meu Título/i });

    // Espera que o elemento exista no documento
    expect(headingElement).toBeInTheDocument();
  });

  it('should apply the gradient class when hasGradient is true', () => {
    // Renderiza o componente com a propriedade hasGradient
    const { container } = render(<Typography hasGradient>Texto com Gradiente</Typography>);
    
    // Procura pelo elemento de parágrafo e verifica se ele contém a classe 'gradient'
    const pElement = container.querySelector('p');
    expect(pElement?.classList.contains('gradient')).toBe(true);
  });
});
