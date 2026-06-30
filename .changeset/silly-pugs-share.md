---
'@marcalexiei/oxlint-config': patch
---

fix: stop restricting `default` in `no-restricted-exports`

`restrictedNamedExports: ['default']` conflicted with `unicorn/prefer-export-from`,
which requires `export { default } from '...'` when re-exporting a default export.
Only `then` is restricted now.
