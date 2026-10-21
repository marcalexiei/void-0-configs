---
'@marcalexiei/oxlint-config': patch
---

fix: stop applying size limits to test files

The `vitest` config turns off `max-lines`, `max-lines-per-function` and `max-statements`,
since a `describe` body counts as one function. `disableMaxStatementsConfig` is no longer
needed in test overrides.
