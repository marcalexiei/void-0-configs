---
'@marcalexiei/oxlint-config': minor
---

feat: turn on four style rules

- `base`: `unicorn/prefer-ternary` and `no-implicit-globals`, which also reports
  `declare function` in a global `.d.ts`
- `vitest`: `vitest/padding-around-test-blocks` and `vitest/padding-around-after-all-blocks`,
  both fixed by `oxlint --fix`
