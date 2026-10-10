---
'@marcalexiei/oxlint-config': minor
---

feat!: support oxlint >= 1.86 and oxlint-tsgolint >= 7.0.2003

The `typescript` config now sets `typescript/no-generated-empty-object-type` to
`error`. 1.86 is the first release that knows the rule and older ones reject the
config, so the `oxlint` peer range moves from `>=1.80.0 <2` to `>=1.86.0 <2`.
`oxlint-tsgolint` moves from `>=7.0.2001 <8` to `>=7.0.2003 <8`, the minimum
oxlint 1.86 accepts.
