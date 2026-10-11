---
'@marcalexiei/oxlint-config': minor
---

feat: tune rules after linting real projects

These rules reported the same code as another rule and are now off. The
`typescript` config turns off `require-await`, `no-throw-literal`,
`prefer-promise-reject-errors` and `promise/catch-or-return`, since their
type-aware counterparts are on, so it must be listed after the `base` config and
used with `typeAware: true`. The others:

- `typescript/explicit-module-boundary-types`: `off`, handled by
  `typescript/explicit-function-return-type`
- `typescript/no-empty-interface`: `off`, handled by
  `typescript/no-empty-object-type`
- `oxc/missing-throw`: `off`, handled by `no-new`

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

- `typescript/no-unsafe-type-assertion`: `off`
- `no-inline-comments`: `off`

Newly enabled: `logical-assignment-operators`, `func-name-matching` and
`unicorn/no-negated-condition`.
