import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { HeroSection } from './HeroSection';

describe('HeroSection Component', () => {
  it('should render the main "Hello World" headings', () => {
    render(<HeroSection />);

    // Procura pelos títulos "Hello" e "World"
    const helloHeading = screen.getByRole('heading', { name: /Hello/i });
    const worldHeading = screen.getByRole('heading', { name: /World/i });

    // Espera que ambos existam
    expect(helloHeading).toBeInTheDocument();
    expect(worldHeading).toBeInTheDocument();
  });

  it('should render the animated words', () => {
    render(<HeroSection />);

    // Verifica se a primeira palavra animada aparece
    const firstAnimatedWord = screen.getByText(/creativity/i);
    expect(firstAnimatedWord).toBeInTheDocument();
  });
});
