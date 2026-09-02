---
'@marcalexiei/oxlint-config': patch
---

fix: disable `vitest/prefer-to-be-falsy` and `vitest/prefer-to-be-truthy`

They conflicted with `vitest/prefer-strict-boolean-matchers`: one rewrote
`toBe(true)` to `toBeTruthy()` and the other rewrote it straight back. The
strict matcher is the stronger assertion, so it is the one left enabled.
