---
'@marcalexiei/oxlint-config': minor
---

feat: name multiple snapshots and count calls with the matcher

The `vitest` config sets two rules to `error`:

- `vitest/prefer-snapshot-hint`: a test that takes more than one snapshot names each of them
- `vitest/prefer-to-have-been-called-times`: `toHaveBeenCalledTimes(n)` over
  `expect(fn.mock.calls).toHaveLength(n)`
