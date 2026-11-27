---
'@marcalexiei/oxlint-config': minor
---

feat!: support oxlint >= 1.95 and oxlint-tsgolint >= 7.0.2008

The `typescript` config now sets `typescript/no-unsafe-class-instance-assignment` to `error`.
1.95 is the first release that knows the rule and older ones reject the config, so the `oxlint`
peer range moves from `>=1.94.0 <2` to `>=1.95.0 <2`. `oxlint-tsgolint` moves from
`>=7.0.2007 <8` to `>=7.0.2008 <8`, the minimum oxlint 1.95 accepts: bump both together.
