import { execSync } from 'node:child_process';
import path from 'node:path';

export const CONFIG_DATA: Array<{
  name: string;
  plugins: Array<{
    name: string;
    scope: string;
    rulePrefix: string | null;
    /** Rules the config may leave unset: deprecated ones, or ones set by another config */
    allowMissing: Array<string>;
    /** Rules that do nothing without options: the config may only set them with options */
    needsOptions: Array<string>;
  }>;
}> = [
  {
    name: 'base',
    plugins: [
      {
        name: 'eslint',
        scope: 'eslint',
        rulePrefix: null,
        allowMissing: [],
        needsOptions: ['id-denylist', 'id-match', 'no-restricted-globals', 'no-restricted-imports'],
      },
      {
        name: 'import',
        scope: 'import',
        rulePrefix: 'import',
        allowMissing: [],
        needsOptions: [],
      },
      {
        name: 'oxc',
        scope: 'oxc',
        rulePrefix: 'oxc',
        allowMissing: [],
        needsOptions: [],
      },
      {
        name: 'promise',
        scope: 'promise',
        rulePrefix: 'promise',
        allowMissing: [],
        needsOptions: [],
      },
      {
        name: 'unicorn',
        scope: 'unicorn',
        rulePrefix: 'unicorn',
        allowMissing: ['prefer-modern-dom-apis'],
        needsOptions: [],
      },
    ],
  },
  {
    name: 'react',
    plugins: [
      {
        name: 'react',
        scope: 'react',
        rulePrefix: 'react',
        allowMissing: [],
        needsOptions: ['forbid-dom-props', 'forbid-elements'],
      },
    ],
  },
  {
    name: 'react-perf',
    plugins: [
      {
        name: 'react-perf',
        scope: 'react_perf',
        rulePrefix: 'react-perf',
        allowMissing: [],
        needsOptions: [],
      },
    ],
  },
  {
    name: 'typescript',
    plugins: [
      {
        name: 'typescript',
        scope: 'typescript',
        rulePrefix: 'typescript',
        allowMissing: [
          // deprecated
          // https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-types
          'ban-types',
        ],
        needsOptions: ['no-restricted-types'],
      },
    ],
  },
  {
    name: 'vitest',
    plugins: [
      {
        name: 'vitest',
        scope: 'vitest',
        rulePrefix: 'vitest',
        allowMissing: [],
        needsOptions: ['no-restricted-matchers', 'no-restricted-vi-methods'],
      },
    ],
  },
];

const command = 'pnpm exec oxlint --rules --format=json';
const output = execSync(command, { encoding: 'utf8', cwd: path.join(import.meta.dirname, '..') });

export const OXLINT_RULES = JSON.parse(output.trim()) as Array<{
  scope: string;
  value: string;
  category: string;
  type_aware: boolean;
  docs_url: string;
}>;

export function log(type: 'info' | 'error' | 'success' | (string & {}), ...others: Array<unknown>) {
  let icon: string | undefined;
  switch (type) {
    case 'info':
      icon = 'ℹ️';
      break;

    case 'error':
      icon = '❌';
      break;

    case 'success':
      icon = '✅';
      break;

    default:
      throw new Error('Invalid type for log');
  }

  console.log(icon, ...others);
  return;
}
