---
'@marcalexiei/oxlint-config': minor
---

feat: tune rules after linting real projects

Rules that reported the same code twice are now reported once. The `typescript`
config turns off `require-await`, `no-throw-literal` and
`prefer-promise-reject-errors`, since their type-aware counterparts are on, plus:

- `typescript/explicit-module-boundary-types`: `off`, handled by
  `typescript/explicit-function-return-type`
- `typescript/no-empty-interface`: `off`, handled by
  `typescript/no-empty-object-type`

Rules that conflicted with common code:

- `import/no-namespace`: ignores `zod`, whose documentation asks for
  `import * as z from 'zod'`
- `id-length`: `z` and `_` are accepted
- `unicorn/max-nested-calls`: `max` moves from `3` to `5`, plain zod schemas
  reach the default
- `unicorn/switch-case-braces`: `avoid`, braces are only required when a case
  declares something
- `import/no-unassigned-import`: allows style files (`css`, `scss`, `sass`, `less`)
- `vitest/require-hook`: allows `ruleTester.run`

Newly enabled: `logical-assignment-operators` and `func-name-matching`.
