import { execSync } from 'node:child_process';
import path from 'node:path';

export const CONFIG_DATA: Array<{
  name: string;
  plugins: Array<{ name: string; scope: string; rulePrefix: string | null }>;
}> = [
  {
    name: 'base',
    plugins: [
      { name: 'eslint', scope: 'eslint', rulePrefix: null },
      { name: 'import', scope: 'import', rulePrefix: 'import' },
    ],
  },
  {
    name: 'typescript',
    plugins: [{ name: 'typescript', scope: 'typescript', rulePrefix: 'typescript' }],
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

  // biome-ignore lint/suspicious/noConsole: logger function
  console.log(icon, ...others);
  return;
}
