import path from 'node:path';

import { CONFIG_DATA, log, OXLINT_RULES } from './_utils.ts';

let hasErrors = false;

for (const config of CONFIG_DATA) {
  for (const plugin of config.plugins) {
    const { default: configData } = await import(
      path.join(import.meta.dirname, '..', 'src', `${config.name}.ts`)
    );

    const configRules = OXLINT_RULES.filter((it) => it.scope === plugin.scope);

    const missingRules: Array<string> = [];
    const unexpectedRules: Array<string> = [];
    for (const rule of configRules) {
      const ruleName = plugin.rulePrefix ? `${plugin.rulePrefix}/${rule.value}` : rule.value;
      const isSet = Boolean(configData.rules[ruleName]);

      if (plugin.needsOptions.includes(rule.value)) {
        if (isSet) {
          unexpectedRules.push(ruleName);
        }
      } else if (!isSet && !plugin.allowMissing.includes(rule.value)) {
        missingRules.push(ruleName);
      }
    }

    const configMessage = `config "${config.name}", plugin "${plugin.name}"`;
    if (missingRules.length) {
      hasErrors = true;
      log('error', configMessage, 'missing rules:', missingRules.join(', '));
    }
    if (unexpectedRules.length) {
      hasErrors = true;
      log('error', configMessage, 'rules left to the consumer:', unexpectedRules.join(', '));
    }
    if (!missingRules.length && !unexpectedRules.length) {
      log('success', configMessage, ' all rules set');
    }
  }
}

process.exit(hasErrors ? 1 : 0);
