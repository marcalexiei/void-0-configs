import fs from 'node:fs';
import path from 'node:path';

// @ts-expect-error
import { CONFIG_DATA, log, OXLINT_RULES } from './_utils.ts';

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

for (const { name, plugins } of CONFIG_DATA) {
  const filePath = path.join(import.meta.dirname, '..', 'src', `${name}.json`);

  const configFileContent = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, 'utf-8')
    : JSON.stringify(baseConfig);

  const config = JSON.parse(configFileContent);

  const originalRules = config.rules;

  // reset plugins
  config.plugins = [];
  config.rules = {};

  for (const plugin of plugins) {
    // Assuming we want to set the rules to the collected output
    const configRules = OXLINT_RULES.filter((it) => plugin.scope === it.scope);

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
