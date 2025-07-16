import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle Component', () => {
  it('should render the title with the correct text', () => {
    // Renderiza a molécula com um título de teste
    render(<SectionTitle title="Meus Projetos" />);

    // Procura pelo título
    const titleElement = screen.getByRole('heading', {
      name: /Meus Projetos/i,
      level: 2,
    });

    // Espera que o título esteja no documento
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the decorative divider', () => {
    // Renderiza a molécula
    const { container } = render(<SectionTitle title="Meus Projetos" />);

    // Procura pela div que serve como a linha.
    // Usamos querySelector porque a linha não tem texto ou um 'role' acessível.
    const dividerElement = container.querySelector('.divider');

    // Espera que a linha exista
    expect(dividerElement).toBeInTheDocument();
  });
});
