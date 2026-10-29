---
'@marcalexiei/oxlint-config': minor
---

feat!: support oxlint >= 1.90 and oxlint-tsgolint >= 7.0.2005

The `typescript` config now sets `typescript/no-unsafe-enum-assignment` to `error`. 1.90 is
the first release that knows the rule and older ones reject the config, so the `oxlint` peer
range moves from `>=1.86.0 <2` to `>=1.90.0 <2`. `oxlint-tsgolint` moves from `>=7.0.2003 <8`
to `>=7.0.2005 <8`, the minimum oxlint 1.90 accepts: bump both together.
