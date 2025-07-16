import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuração para os atalhos de importação (ex: @/components/...)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Configuração do Vitest (ambiente de teste)
  test: {
    // Permite usar as funções do Vitest (expect, it, etc.) sem precisar importá-las.
    globals: true,
    // Simula o ambiente de um navegador para os testes.
    environment: 'jsdom',
    // A linha 'setupFiles' foi removida para não precisar criar um novo ficheiro.
  },
});
