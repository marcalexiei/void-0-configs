---
'@marcalexiei/oxfmt-config': major
---

feat!: expose a single `defineConfig` function

The package no longer exports the `oxfmtConfig` object (named or default).
It exports `defineConfig`, which takes a canonical oxfmt config and merges it on top of the preset.

```diff
-import { oxfmtConfig } from '@marcalexiei/oxfmt-config';
+import { defineConfig } from '@marcalexiei/oxfmt-config';

-export default oxfmtConfig;
+export default defineConfig();
```

Top level options replace the preset ones, `sortImports` is merged one level deep and `overrides` are appended to the preset ones.

The preset also gained a `**/*.jsonc` override setting `trailingComma: 'none'`,
so JSONC files no longer get trailing commas.
