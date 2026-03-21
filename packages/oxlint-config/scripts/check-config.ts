import path from 'node:path';

// @ts-expect-error
import { CONFIG_DATA, log, OXLINT_RULES } from './_utils.ts';

let hasMissingRules = false;

for (const config of CONFIG_DATA) {
  for (const plugin of config.plugins) {
    const { default: configData } = await import(
      path.join(import.meta.dirname, '..', 'src', `${config.name}.ts`)
    );

    const configRules = OXLINT_RULES.filter((it) => it.scope === plugin.scope);

    const missingRules: Array<string> = [];
    for (const rule of configRules) {
      const ruleName = plugin.rulePrefix ? `${plugin.rulePrefix}/${rule.value}` : rule.value;
      if (!configData.rules[ruleName] && !plugin.allowMissing.includes(rule.value)) {
        hasMissingRules = true;
        missingRules.push(ruleName);
      }
    }

    const configMessage = `config "${config.name}", plugin "${plugin.name}"`;
    if (missingRules.length) {
      log('error', configMessage, 'missing rules:', missingRules.join(', '));
    } else {
      log('success', configMessage, ' all rules set');
    }
  }
}

process.exit(hasMissingRules ? 1 : 0);
