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
> `typescriptConfig` requires the type aware option to be enabled.
> See <https://oxc.rs/docs/guide/usage/linter/type-aware>
>
> It must come after `baseConfig`: it turns off the `base` rules that have a type aware
> counterpart (`require-await`, `no-throw-literal`, `prefer-promise-reject-errors` and
> `promise/catch-or-return`), so without type aware linting those checks do not run at all.

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
> `reactConfig` must come after `baseConfig`, since it overrides two of its rules:
>
> - `unicorn/import-style`: named imports (`import { useState } from 'react'`) are the only
>   accepted way to import React, as [recommended by its documentation](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports)
> - `prefer-arrow-callback`: named functions are accepted as callbacks, so that
>   `memo(function Name() {})` can give a wrapped component its display name

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
