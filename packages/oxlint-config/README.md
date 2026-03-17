# `@marcalexiei/oxlint-config`

## Install

```sh
pnpm i --save-dev oxlint @marcalexiei/oxlint-config
```

If you are using ts:

```sh
pnpm i --save-dev oxlint oxlint-tsgolint @marcalexiei/oxlint-config
```

## Usage

### TS

```ts
// oxlint.config.ts
import { baseConfig } from '@marcalexiei/oxlint-config/base';
import { typescriptConfig } from '@marcalexiei/oxlint-config/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [baseConfig, typescriptConfig],
  options: {
    typeAware: true,
  },
});
```

> ⚠️ NOTE
> Typescript config has rules that require type aware option to be enabled
> See <https://oxc.rs/docs/guide/usage/linter/type-aware>

```ts
import { baseConfig } from '@marcalexiei/oxlint-config/base';
import { typescriptConfig } from '@marcalexiei/oxlint-config/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [baseConfig, typescriptConfig],
  options: {
    typeAware: true,
  },
});
```
