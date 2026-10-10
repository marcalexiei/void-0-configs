---
'@marcalexiei/oxlint-config': minor
---

feat: tune rules after linting real projects

The `typescript` config must be listed after `base` and used with
`typeAware: true`: it turns off `require-await`, `no-throw-literal`,
`prefer-promise-reject-errors` and `promise/catch-or-return` in favour of their
type-aware counterparts. The type-aware `require-await` accepts an `async`
function without `await` when it returns a promise.

- Off: `typescript/explicit-module-boundary-types`,
  `typescript/no-empty-interface`, `typescript/no-unsafe-type-assertion`,
  `oxc/missing-throw`, `no-inline-comments`
- On: `logical-assignment-operators`, `func-name-matching`,
  `unicorn/no-negated-condition`
- Relaxed: `import/no-namespace` (zod), `id-length` (`z`, `_`),
  `unicorn/max-nested-calls` (`max: 5`), `unicorn/switch-case-braces` (`avoid`),
  `import/no-unassigned-import` (style files), `vitest/require-hook`
  (`ruleTester.run`)
