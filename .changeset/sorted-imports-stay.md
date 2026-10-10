---
'@marcalexiei/oxfmt-config': patch
---

fix: keep the preset import groups when `sortImports` is `true`

`defineConfig({ sortImports: true })` passed `true` through to oxfmt, which then
sorted imports with its own default groups instead of the preset ones. `true` now
keeps the preset; `false` still turns import sorting off.

A `sortImports` inside `overrides` had the same problem, and a partial object
there dropped the preset groups: both are now merged like the top level one.
