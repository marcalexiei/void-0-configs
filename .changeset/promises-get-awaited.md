---
'@marcalexiei/oxlint-config': minor
---

feat: ask for `async` and `await` over promise chains

The `typescript` config sets `typescript/promise-function-async` to `error`: a function that
returns a promise must be `async`, so it rejects instead of throwing. `oxlint --fix` fixes most
reports. A stub that returns a value it already has is written `async () => Promise.resolve(x)`,
so `unicorn/no-useless-promise-resolve-reject` is off there, and `promise/no-return-wrap` covers
`then` callbacks instead.

The `base` config sets `promise/prefer-await-to-then` to `error`.
