---
'@marcalexiei/oxlint-config': minor
---

fix: stop reporting the same code twice

Off, since another rule reports the same code: `no-duplicate-imports`,
`unicorn/no-nested-ternary`, `unicorn/no-instanceof-array`,
`unicorn/no-length-as-slice-end`, `unicorn/no-anonymous-default-export`,
`typescript/prefer-ts-expect-error` and, in the `typescript` config,
`unicorn/prefer-string-starts-ends-with` and `unicorn/no-unnecessary-await`.

`no-implied-eval` is now `error` in the `base` config.
