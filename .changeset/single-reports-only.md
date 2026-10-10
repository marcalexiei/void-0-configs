---
'@marcalexiei/oxlint-config': minor
---

fix: stop reporting the same code twice

These rules only repeated what another rule already reports and are now off:

- `no-duplicate-imports`: handled by `import/no-duplicates`
- `unicorn/no-nested-ternary`: handled by `no-nested-ternary`
- `unicorn/no-instanceof-array`: handled by `unicorn/no-instanceof-builtins`
- `unicorn/no-length-as-slice-end`: handled by `unicorn/no-unnecessary-slice-end`
- `unicorn/no-anonymous-default-export`: handled by
  `import/no-anonymous-default-export`
- `unicorn/prefer-string-starts-ends-with`: off in the `typescript` config, handled
  by `typescript/prefer-string-starts-ends-with`

`no-implied-eval` is now `error` in the `base` config, so JavaScript projects are
covered too. The `typescript` config turns it off in favour of its type-aware
counterpart.
