---
'@marcalexiei/oxlint-config': patch
---

fix: stop setting rules that do nothing without options

`id-denylist`, `id-match`, `no-restricted-globals`, `no-restricted-imports`,
`typescript/no-restricted-types`, `react/forbid-dom-props`,
`react/forbid-elements`, `vitest/no-restricted-matchers` and
`vitest/no-restricted-vi-methods` are left to the consumer. Nothing changes in
what is reported.
