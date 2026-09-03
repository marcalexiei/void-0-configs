---
'@marcalexiei/oxlint-config': minor
---

feat!: support oxlint >= 1.80 and oxlint-tsgolint >= 7.0.2001

`oxlint-tsgolint` switched to a versioning scheme tracking TypeScript, so the peer
range moves from `>=0.23.0 <1` to `>=7.0.2001 <8`. The `oxlint` range moves to
`>=1.80.0 <2`: 1.80 is the first release that knows every rule this config sets,
and pinning the range to the newest release would force a bump on consumers that
have no reason to take one.
