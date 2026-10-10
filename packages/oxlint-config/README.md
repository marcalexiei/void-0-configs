# `@marcalexiei/oxlint-config`

## Install

```sh
pnpm i --save-dev oxlint @marcalexiei/oxlint-config
```

With TypeScript:

```sh
pnpm i --save-dev oxlint oxlint-tsgolint @marcalexiei/oxlint-config
```

## Usage

Each config is a separate entry point, to combine through `extends`.
`baseConfig` always comes first: the other configs override some of its rules.

`no-undef` is on, so declare where the code runs with `env`: without it, globals such as
`console` or `document` are reported as undefined.

### JavaScript

```ts
// oxlint.config.ts
import { baseConfig } from '@marcalexiei/oxlint-config/base';
import { defineConfig } from 'oxlint';

export default defineConfig({
  env: {
    node: true,
  },
  extends: [baseConfig],
});
```

### TypeScript

```ts
import { baseConfig } from '@marcalexiei/oxlint-config/base';
import { typescriptConfig } from '@marcalexiei/oxlint-config/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
  env: {
    node: true,
  },
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
> It turns off the `base` rules that have a type aware counterpart, such as `require-await`
> or `no-throw-literal`, so without type aware linting those checks do not run at all.

### React

```ts
import { baseConfig } from '@marcalexiei/oxlint-config/base';
import { reactConfig } from '@marcalexiei/oxlint-config/react';
import { typescriptConfig } from '@marcalexiei/oxlint-config/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
  env: {
    browser: true,
  },
  extends: [baseConfig, typescriptConfig, reactConfig],
  options: {
    typeAware: true,
  },
});
```

> ⚠️ NOTE
> `reactConfig` overrides two `base` rules:
>
> - `unicorn/import-style`: default imports of React are reported, which together with
>   `import/no-namespace` leaves named imports (`import { useState } from 'react'`) as the
>   only accepted form, as [recommended by its documentation](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports)
> - `prefer-arrow-callback`: named functions are accepted as callbacks, so that
>   `memo(function Name() {})` can give a wrapped component its display name

### DOM

`domConfig` adds `unicorn/prefer-modern-dom-apis`, which only makes sense for code running in
a browser.

```ts
import { baseConfig } from '@marcalexiei/oxlint-config/base';
import { domConfig } from '@marcalexiei/oxlint-config/dom';
import { defineConfig } from 'oxlint';

export default defineConfig({
  env: {
    browser: true,
  },
  extends: [baseConfig, domConfig],
});
```

### Vitest

`vitestConfig` is meant for test files only, so it goes in `overrides`.

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
  options: {
    typeAware: true,
  },
  overrides: [
    {
      files: ['**/*.{spec,test}.ts'],
      ...vitestConfig,
    },
  ],
});
```

### Size limits

`baseConfig` limits the size of files and functions (`max-lines`, `max-lines-per-function`
and `max-statements`). `disableMaxStatementsConfig` turns the three rules off where the
limits get in the way, like test files.

```ts
import { baseConfig, disableMaxStatementsConfig } from '@marcalexiei/oxlint-config/base';
import { defineConfig } from 'oxlint';

export default defineConfig({
  env: {
    node: true,
  },
  extends: [baseConfig],
  overrides: [
    {
      files: ['**/*.{spec,test}.ts'],
      ...disableMaxStatementsConfig,
    },
  ],
});
```

### Rules left to you

Some rules report nothing until they are given options, so the configs do not set them.
Add the ones you need to your own `rules`:

| Config       | Rules                                                                       |
| :----------- | :-------------------------------------------------------------------------- |
| `base`       | `id-denylist`, `id-match`, `no-restricted-globals`, `no-restricted-imports` |
| `typescript` | `typescript/no-restricted-types`                                            |
| `react`      | `react/forbid-dom-props`, `react/forbid-elements`                           |
| `vitest`     | `vitest/no-restricted-matchers`, `vitest/no-restricted-vi-methods`          |

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
