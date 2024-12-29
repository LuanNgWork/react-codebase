import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReactCompiler from 'eslint-plugin-react-compiler'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'

export default [
  // General ESLint settings
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'], // Apply to JavaScript and TypeScript files
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
      'react-compiler': eslintPluginReactCompiler,
    },
    rules: {
      'prettier/prettier': ['error'],
      'react/react-in-jsx-scope': 'off', // For projects using Next.js
      'react/prop-types': 'off', // Disable prop-types if using TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc', // Alphabetize imports within groups
            caseInsensitive: true, // Ignore case when alphabetizing
          },
        },
      ],
      'react/jsx-uses-react': 'off', // React 17+ JSX runtime
      'react/jsx-uses-vars': 'error',
      'react-compiler/react-compile': 'error',
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
      'import/resolver': {
        typescript: {}, // Support TypeScript module resolution
      },
    },
  },
]
