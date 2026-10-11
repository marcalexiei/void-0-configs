import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { CONFIG_DATA, log, OXLINT_RULES } from './_utils.ts';

/**
 * ```shell
 * pnpm --filter="@marcalexiei/oxlint-config" run rules:write unicorn
 * ```
 */

const [, , pluginScope] = process.argv;

const pluginScopes = new Set(OXLINT_RULES.map((it) => it.scope));

if (!pluginScope) {
  log('error', 'missing plugin scope');
  process.exit(1);
}

if (pluginScopes.has(pluginScope) === false) {
  log(
    'error',
    'invalid plugin scope: ',
    pluginScope,
    '\n',
    'allowed values:',
    Array.from(pluginScopes).join(', '),
  );
  process.exit(1);
}

const configRules = OXLINT_RULES.filter((it) => it.scope === pluginScope);

const plugin = CONFIG_DATA.flatMap((it) => it.plugins).find((it) => it.scope === pluginScope);
const skippedRules = new Set([...(plugin?.allowMissing ?? []), ...(plugin?.needsOptions ?? [])]);
const rulePrefix = plugin ? plugin.rulePrefix : pluginScope.replaceAll('_', '-');

const rules: Record<string, string> = {};

for (const rule of configRules) {
  if (skippedRules.has(rule.value)) {
    continue;
  }

  const ruleName = rulePrefix ? `${rulePrefix}/${rule.value}` : rule.value;
  rules[ruleName] = 'error';
}

const outputFilePath = path.join(import.meta.dirname, '..', 'generated-rules.json');

fs.writeFileSync(outputFilePath, JSON.stringify(rules, null, 2));

log('success', `${pluginScope} rules available in ${outputFilePath}`);
