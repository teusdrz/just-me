import { useEffect, useState, useRef } from 'react';

/**
 * Um hook customizado que deteta quando um elemento está visível na tela.
 * @param options - Opções para a Intersection Observer API (threshold, rootMargin).
 * @returns Um array contendo a referência para o elemento e um booleano indicando se está visível.
 */
export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Quando o elemento se torna visível, atualizamos o estado
      // e desconectamos o observador para não verificar novamente (melhora a performance).
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [containerRef, isVisible] as const;
};
