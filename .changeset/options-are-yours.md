---
'@marcalexiei/oxlint-config': patch
---

fix: stop setting rules that do nothing without options

These rules report nothing until they are given options, so the configs no longer
set them and the README lists them as left to the consumer:

- `base`: `id-denylist`, `id-match`, `no-restricted-globals`,
  `no-restricted-imports`
- `typescript`: `typescript/no-restricted-types`
- `react`: `react/forbid-dom-props`, `react/forbid-elements`
- `vitest`: `vitest/no-restricted-matchers`, `vitest/no-restricted-vi-methods`

Nothing changes in what is reported.
