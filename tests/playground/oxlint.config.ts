import { baseConfig } from '@marcalexiei/oxlint-config/base';
import { reactConfig } from '@marcalexiei/oxlint-config/react';
import { typescriptConfig } from '@marcalexiei/oxlint-config/typescript';
import { vitestConfig } from '@marcalexiei/oxlint-config/vitest';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [baseConfig, typescriptConfig, reactConfig],
  options: {
    typeAware: true,
  },
  globals: {
    console: 'readonly',
  },
  overrides: [
    {
      files: ['**/*.{spec,test}.ts'],
      ...vitestConfig,
    },
  ],
});
