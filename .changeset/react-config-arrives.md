---
'@marcalexiei/oxlint-config': minor
---

feat: add `react` config

Port of the `react` config of `@marcalexiei/eslint-config`, available at
`@marcalexiei/oxlint-config/react`. It sets every rule of the `react` plugin and
must be listed after the `base` config, since it overrides two of its rules:

- `unicorn/import-style`: default imports of React are reported. With
  `import/no-namespace` from `base`, named imports
  (`import { useState } from 'react'`) are the only accepted form, as recommended
  by the React documentation. The eslint config asked for namespace imports instead
- `prefer-arrow-callback`: named functions are accepted as callbacks, so that
  `memo(function Name() {})` can give a wrapped component its display name
