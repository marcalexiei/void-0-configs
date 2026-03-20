import { defineConfig } from 'oxlint';

const domConfig = defineConfig({
  $schema: '../node_modules/oxlint/configuration_schema.json',
  plugins: ['unicorn'],

  rules: {
    'unicorn/prefer-modern-dom-apis': 'error',
  },
});

export { domConfig as baseConfig, domConfig as default };
