// eslint.config.js
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import cypressPlugin from 'eslint-plugin-cypress'

export default [
  {
    // Configuração para arquivos JavaScript/TypeScript com JSX
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Com a nova transformação de JSX (React 17+), não é necessário importar o React em cada arquivo
      'react/react-in-jsx-scope': 'off',
      // Regras dos hooks do React
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Integração com o Prettier
      'prettier/prettier': 'error',
      // Aqui você pode adicionar outras regras personalizadas ou copiar regras equivalentes às recomendadas
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    // Configuração específica para arquivos de teste (Jest)
    files: ['**/*.test.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: { jest: 'readonly' },
    },
  },
  {
    // Configuração específica para arquivos do Cypress
    files: ['cypress/**/*.{js,jsx,ts,tsx}'],
    plugins: { cypress: cypressPlugin },
    languageOptions: {
      globals: {
        Cypress: 'readonly',
        cy: 'readonly',
      },
    },
  },
]
