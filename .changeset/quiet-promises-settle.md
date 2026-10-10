---
'@marcalexiei/oxlint-config': minor
---

feat: add the `oxc` and `promise` plugins to the `base` config

`plugins` is now `['eslint', 'import', 'oxc', 'promise', 'unicorn']` and every
rule of the two plugins is set. Most `oxc` rules catch plain mistakes, such as a
comparison that can never be true or a `replaceAll` with a non-global regex.
Rules that ban language features, guess callbacks from their name or duplicate an
existing rule are off:

- `oxc/bad-bitwise-operator`: handled by `no-bitwise`
- `promise/no-return-wrap`: handled by `unicorn/no-useless-promise-resolve-reject`
- `promise/always-return`: `['error', { ignoreLastCallback: true }]`, since the
  last callback of a chain has nothing to return to
