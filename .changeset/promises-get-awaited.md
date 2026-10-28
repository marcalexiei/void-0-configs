---
'@marcalexiei/oxlint-config': minor
---

feat: ask for `async` and `await` over promise chains

The `typescript` config sets `typescript/promise-function-async` to `error`: a function that
returns a promise must be `async`, so it rejects instead of throwing. Most reports are fixed by
`oxlint --fix`.

The `base` config sets `promise/prefer-await-to-then` to `error`.
