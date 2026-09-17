# `@marcalexiei/oxfmt-config`

## Install

```sh
pnpm i --save-dev oxfmt @marcalexiei/oxfmt-config
```

## Usage

```ts
// oxfmt.config.ts
import { defineConfig } from '@marcalexiei/oxfmt-config';

export default defineConfig();
```

`defineConfig` accepts a canonical oxfmt config and merges it on top of this preset:

```ts
import { defineConfig } from '@marcalexiei/oxfmt-config';

export default defineConfig({
  printWidth: 120,
  ignorePatterns: ['**/dist'],
  sortImports: {
    newlinesBetween: false,
  },
});
```

Top level options replace the preset ones, with two exceptions:

- `sortImports` is merged one level deep, so the example above keeps the preset `groups`;
  pass your own `groups` to replace them entirely, or `sortImports: false` to turn import
  sorting off
- `overrides` are appended to the preset ones, so yours win for the files they match

The preset ships one override: `**/*.jsonc` is formatted with `trailingComma: 'none'`.
