---
'@marcalexiei/oxfmt-config': patch
---

fix: keep the preset import groups when `sortImports` is `true`

`true` was passed through to oxfmt, which sorted with its own default groups. A
`sortImports` inside `overrides` is now merged with the preset too.
