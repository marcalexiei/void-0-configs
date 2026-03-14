import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

function log(type: 'info' | 'error' | 'success' | (string & {}), ...others: Array<unknown>) {
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

const baseConfig = {
  $schema: '../node_modules/oxlint/configuration_schema.json',
  plugins: [],
  rules: {},
};

const configurationData: Array<{
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

for (const { name, plugins } of configurationData) {
  const filePath = path.join(import.meta.dirname, '..', 'src', `${name}.json`);

  const configFileContent = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, 'utf-8')
    : JSON.stringify(baseConfig);

  const config = JSON.parse(configFileContent);

  const command = 'pnpm exec oxlint --rules --format=json';
  const output = execSync(command, { encoding: 'utf8', cwd: path.join(import.meta.dirname, '..') });

  const rules = JSON.parse(output.trim()) as Array<{
    scope: string;
    value: string;
    category: string;
    type_aware: boolean;
    docs_url: string;
  }>;

  const originalRules = config.rules;

  // reset plugins
  config.plugins = [];
  config.rules = {};

  for (const plugin of plugins) {
    // Assuming we want to set the rules to the collected output
    const configRules = rules.filter((it) => plugin.scope === it.scope);

    for (const rule of configRules) {
      const ruleName = plugin.rulePrefix ? `${plugin.rulePrefix}/${rule.value}` : rule.value;
      const ruleValue = rule.value in originalRules ? originalRules[rule.value] : 'error';
      config.rules[ruleName] = ruleValue;
    }

    config.plugins.push(plugin.name);

    log('info', `${plugin.name} file updated`);
    fs.writeFileSync(filePath, JSON.stringify(config, null, 2));
  }

  log('success', `${name} config updated`);
}
