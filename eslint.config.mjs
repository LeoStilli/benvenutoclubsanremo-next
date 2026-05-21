import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore specific directories first
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "out/**",
      ".vercel/**",
      ".cache/**",
      ".turbo/**",
      "*.log",
      ".DS_Store",
      "*.tmp",
      "*.temp",
    ],
  },

  // Extend Next.js configs using FlatCompat for all JS/TS files
  ...compat.extends("next/core-web-vitals"),

  // Custom rules for specific files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Disable problematic rules
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',

      // TypeScript rules (only if the plugin is loaded)
      ...(compat.extends("next/typescript").some(config => config.plugins?.['@typescript-eslint']) ? {
        '@typescript-eslint/no-explicit-any': 'off',
      } : {}),

      // General rules
      'prefer-const': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
  },
];

export default eslintConfig;
