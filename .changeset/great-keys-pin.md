---
'@marcalexiei/oxfmt-config': patch
---

chore: explicitly set all supported oxfmt formatting options

Pin every JS/TS/JSON/Markdown/YAML option the current oxfmt version supports so
the config is self-documenting and stays stable if upstream defaults change.
Formatting output is unchanged.
