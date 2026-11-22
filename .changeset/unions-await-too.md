---
'@marcalexiei/oxlint-config': minor
---

feat!: support oxlint >= 1.94 and oxlint-tsgolint >= 7.0.2007

The `typescript` config now sets `typescript/no-misused-promises` to
`['error', { checksConditionals: { flagUnions: 'strict' } }]`, so `Promise<T> | T` used in a
conditional is reported too. 1.94 is the first release that accepts the option and older ones
reject the config, so the `oxlint` peer range moves from `>=1.90.0 <2` to `>=1.94.0 <2`.
`oxlint-tsgolint` moves from `>=7.0.2005 <8` to `>=7.0.2007 <8`, the minimum oxlint 1.94
accepts: bump both together.
