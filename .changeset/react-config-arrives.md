---
'@marcalexiei/oxlint-config': minor
---

feat: add `react` config

Port of the `react` config of `@marcalexiei/eslint-config`, available at
`@marcalexiei/oxlint-config/react`. List it after `base`: it overrides
`prefer-arrow-callback` and `unicorn/import-style`, which makes named imports the
only accepted way to import React.
