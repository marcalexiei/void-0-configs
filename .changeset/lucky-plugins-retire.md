---
'@marcalexiei/oxlint-config': minor
---

feat!: drop the `jest` plugin from the `vitest` config

`plugins` is now `['vitest']` and every `jest/*` rule is gone. The `vitest`
plugin already covers all of them except `jest/no-export`, which had no
equivalent and is no longer reported.
