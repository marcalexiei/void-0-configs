---
'@marcalexiei/oxfmt-config': patch
'@marcalexiei/oxlint-config': patch
---

fix: stop publishing source maps

The packages shipped `.js.map` and `.d.ts.map` files pointing at sources that are
not published. The build also empties `dist` first, so files from an earlier build
can no longer end up in a release.
