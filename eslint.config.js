// --- Imports Corretos e Necessários ---
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import configPrettier from 'eslint-config-prettier';


// --- Configuração Final ---
export default tseslint.config([
  globalIgnores(['dist']), // Ignora a pasta 'dist'
  {
    files: ['**/*.{ts,tsx}'], // Aplica estas regras apenas para ficheiros TypeScript e TSX
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      pluginJsxA11y.configs.recommended, // Regras de acessibilidade
      reactRefresh.configs.vite,
      configPrettier, // Compatibilidade com o Prettier (sempre por último)
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect', // Detecta a versão do React
      },
    },
  },
]);