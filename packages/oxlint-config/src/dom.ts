import { defineConfig } from 'oxlint';

const domConfig = defineConfig({
  plugins: ['unicorn'],

  rules: {
    'unicorn/prefer-modern-dom-apis': 'error',
  },
});

export { domConfig as baseConfig, domConfig as default };
