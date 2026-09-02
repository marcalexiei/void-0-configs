---
'@marcalexiei/oxlint-config': minor
---

feat: configure new oxlint rules

Set all rules introduced by the latest oxlint release across the `base` and
`vitest` configs:

- `no-unreachable-loop`: `error`
- `one-var`: `['error', 'never']`, since the default `always` would require
  combining declarations
- `unicorn/explicit-timer-delay`: `error`
- `unicorn/no-confusing-array-with`: `error`
- `id-denylist`: `off`, it needs an explicit list of names to be useful
- `vitest/padding-around-test-blocks`: `off`, matching its `jest` counterpart
