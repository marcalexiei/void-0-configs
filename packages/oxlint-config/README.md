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

### React

```ts
import { baseConfig } from '@marcalexiei/oxlint-config/base';
import { reactConfig } from '@marcalexiei/oxlint-config/react';
import { typescriptConfig } from '@marcalexiei/oxlint-config/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [baseConfig, typescriptConfig, reactConfig],
  options: {
    typeAware: true,
  },
});
```

> ⚠️ NOTE
> `reactConfig` must come after `baseConfig`: it overrides `unicorn/import-style` so that
> named imports (`import { useState } from 'react'`) are the only accepted way to import
> React, as [recommended by its documentation](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports).

### Vitest

```ts
import { baseConfig } from '@marcalexiei/oxlint-config/base';
import { typescriptConfig } from '@marcalexiei/oxlint-config/typescript';
import { vitestConfig } from '@marcalexiei/oxlint-config/vitest';
import { defineConfig } from 'oxlint';

export default defineConfig({
  env: {
    browser: true,
    node: true,
  },
  extends: [baseConfig, typescriptConfig],
  overrides: [
    {
      files: ['**/*.{spec,test}.ts'],
      ...vitestConfig,
    },
  ],
  plugins: [],
});
```

## CI

Consider creating a `lint:ci` script so you can rely on `format` option with `github` value to generate better annotations for warning and errors.

```json
{
  "scripts": {
    "lint": "oxlint",
    "lint:ci": "oxlint --format=github"
  }
}
```

```shell
pnpm run lint:ci
```

[Documentation reference](https://oxc.rs/docs/guide/usage/linter/ci.html#github-actions)
