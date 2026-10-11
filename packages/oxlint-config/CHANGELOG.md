# @marcalexiei/oxlint-config

## 1.6.0

### Minor Changes

- [#98](https://github.com/marcalexiei/void-0-configs/pull/98) [`e8c3503`](https://github.com/marcalexiei/void-0-configs/commit/e8c3503b710d09367e34cae2c630504049ec6f2e) - feat: tune rules after linting real projects
  
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

- [#97](https://github.com/marcalexiei/void-0-configs/pull/97) [`351881f`](https://github.com/marcalexiei/void-0-configs/commit/351881f0271c2bbc25ea05366f0cc48998c44247) - feat!: support oxlint >= 1.86 and oxlint-tsgolint >= 7.0.2003
  
  The `typescript` config sets `typescript/no-generated-empty-object-type`, which
  older releases reject.

- [#98](https://github.com/marcalexiei/void-0-configs/pull/98) [`e8c3503`](https://github.com/marcalexiei/void-0-configs/commit/e8c3503b710d09367e34cae2c630504049ec6f2e) - feat: add the `oxc` and `promise` plugins to the `base` config
  
  Every rule of the two plugins is set. Rules that ban language features, guess
  callbacks from their name or duplicate an existing rule are off.

- [#97](https://github.com/marcalexiei/void-0-configs/pull/97) [`351881f`](https://github.com/marcalexiei/void-0-configs/commit/351881f0271c2bbc25ea05366f0cc48998c44247) - feat: add `react` config
  
  Port of the `react` config of `@marcalexiei/eslint-config`, available at
  `@marcalexiei/oxlint-config/react`. List it after `base`: it overrides
  `prefer-arrow-callback` and `unicorn/import-style`, which makes named imports the
  only accepted way to import React.

- [#108](https://github.com/marcalexiei/void-0-configs/pull/108) [`22b0dd5`](https://github.com/marcalexiei/void-0-configs/commit/22b0dd51f6544ac8aff93ec854c61b202b6ef29f) - fix: stop reporting the same code twice
  
  Off, since another rule reports the same code: `no-duplicate-imports`,
  `unicorn/no-nested-ternary`, `unicorn/no-instanceof-array`,
  `unicorn/no-length-as-slice-end`, `unicorn/no-anonymous-default-export`,
  `typescript/prefer-ts-expect-error` and, in the `typescript` config,
  `unicorn/prefer-string-starts-ends-with` and `unicorn/no-unnecessary-await`.
  
  `no-implied-eval` is now `error` in the `base` config.

### Patch Changes

- [#108](https://github.com/marcalexiei/void-0-configs/pull/108) [`22b0dd5`](https://github.com/marcalexiei/void-0-configs/commit/22b0dd51f6544ac8aff93ec854c61b202b6ef29f) - fix: stop publishing source maps
  
  They pointed at sources that are not published.

- [#108](https://github.com/marcalexiei/void-0-configs/pull/108) [`22b0dd5`](https://github.com/marcalexiei/void-0-configs/commit/22b0dd51f6544ac8aff93ec854c61b202b6ef29f) - fix: stop setting rules that do nothing without options
  
  `id-denylist`, `id-match`, `no-restricted-globals`, `no-restricted-imports`,
  `typescript/no-restricted-types`, `react/forbid-dom-props`,
  `react/forbid-elements`, `vitest/no-restricted-matchers` and
  `vitest/no-restricted-vi-methods` are left to the consumer. Nothing changes in
  what is reported.

## 1.5.0

### Minor Changes

- [#77](https://github.com/marcalexiei/void-0-configs/pull/77) [`6ee5023`](https://github.com/marcalexiei/void-0-configs/commit/6ee5023894bd11a05914a6183caf01261d405ca6) - feat!: support oxlint >= 1.80 and oxlint-tsgolint >= 7.0.2001
  
  `oxlint-tsgolint` switched to a versioning scheme tracking TypeScript, so the peer
  range moves from `>=0.23.0 <1` to `>=7.0.2001 <8`. The `oxlint` range moves to
  `>=1.80.0 <2`: 1.80 is the first release that knows every rule this config sets,
  and pinning the range to the newest release would force a bump on consumers that
  have no reason to take one.

- [#81](https://github.com/marcalexiei/void-0-configs/pull/81) [`871c5dd`](https://github.com/marcalexiei/void-0-configs/commit/871c5dddd8550c74983efd908199c86e3b832ddc) - feat!: drop the `jest` plugin from the `vitest` config
  
  `plugins` is now `['vitest']` and every `jest/*` rule is gone. The `vitest`
  plugin already covers all of them except `jest/no-export`, which had no
  equivalent and is no longer reported.

- [#77](https://github.com/marcalexiei/void-0-configs/pull/77) [`6ee5023`](https://github.com/marcalexiei/void-0-configs/commit/6ee5023894bd11a05914a6183caf01261d405ca6) - feat: configure new oxlint rules
  
  Set all rules introduced by the latest oxlint release across the `base` and
  `vitest` configs:
  
  - `no-unreachable-loop`: `error`
  - `one-var`: `['error', 'never']`, since the default `always` would require
    combining declarations
  - `unicorn/explicit-timer-delay`: `error`
  - `unicorn/no-confusing-array-with`: `error`
  - `id-denylist`: `off`, it needs an explicit list of names to be useful
  - `vitest/padding-around-test-blocks`: `off`, matching its `jest` counterpart

### Patch Changes

- [#81](https://github.com/marcalexiei/void-0-configs/pull/81) [`871c5dd`](https://github.com/marcalexiei/void-0-configs/commit/871c5dddd8550c74983efd908199c86e3b832ddc) - fix: disable `vitest/prefer-to-be-falsy` and `vitest/prefer-to-be-truthy`
  
  They conflicted with `vitest/prefer-strict-boolean-matchers`: one rewrote
  `toBe(true)` to `toBeTruthy()` and the other rewrote it straight back. The
  strict matcher is the stronger assertion, so it is the one left enabled.

## 1.4.1

### Patch Changes

- [#57](https://github.com/marcalexiei/void-0-configs/pull/57) [`92727d5`](https://github.com/marcalexiei/void-0-configs/commit/92727d5339806ba0736f823f57d25467822481fd) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: stop restricting `default` in `no-restricted-exports`

  `restrictedNamedExports: ['default']` conflicted with `unicorn/prefer-export-from`,
  which requires `export { default } from '...'` when re-exporting a default export.
  Only `then` is restricted now.

## 1.4.0

### Minor Changes

- [#55](https://github.com/marcalexiei/void-0-configs/pull/55) [`08ed247`](https://github.com/marcalexiei/void-0-configs/commit/08ed247955e2bdf97653adc96bc2aaa6aba66100) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: configure new oxlint rules

  Set all rules introduced by the latest oxlint release across the `base`,
  `typescript` and `vitest` configs, mirroring the decisions made in
  `@marcalexiei/eslint-config`.

- [#55](https://github.com/marcalexiei/void-0-configs/pull/55) [`08ed247`](https://github.com/marcalexiei/void-0-configs/commit/08ed247955e2bdf97653adc96bc2aaa6aba66100) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat!: support oxlint >= 1.72 and oxlint-tsgolint >= 0.23

- [#55](https://github.com/marcalexiei/void-0-configs/pull/55) [`08ed247`](https://github.com/marcalexiei/void-0-configs/commit/08ed247955e2bdf97653adc96bc2aaa6aba66100) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: support new prefer-destructuring options format

## 1.3.2

### Patch Changes

- [#53](https://github.com/marcalexiei/void-0-configs/pull/53) [`3f0f723`](https://github.com/marcalexiei/void-0-configs/commit/3f0f7237335866300a1a1746671f68afdd9e28c8) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: refine types

## 1.3.1

### Patch Changes

- [#32](https://github.com/marcalexiei/void-0-configs/pull/32) [`85d78c3`](https://github.com/marcalexiei/void-0-configs/commit/85d78c3570acbb20fbc339e63b7a130ce548985e) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: correct types

## 1.3.0

### Minor Changes

- [#24](https://github.com/marcalexiei/void-0-configs/pull/24) [`066c6a3`](https://github.com/marcalexiei/void-0-configs/commit/066c6a37bf9ae2446d6f1c0e420ba547c10d3fa0) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: add `disableMaxStatementsConfig`

- [#25](https://github.com/marcalexiei/void-0-configs/pull/25) [`ae1e1f7`](https://github.com/marcalexiei/void-0-configs/commit/ae1e1f7439025ec2d2764b3616b51cfc8541a883) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: add jest compatible rules to `vitest` config

### Patch Changes

- [#31](https://github.com/marcalexiei/void-0-configs/pull/31) [`0cd87e4`](https://github.com/marcalexiei/void-0-configs/commit/0cd87e4868c55a5ebddc4a6305bf7b4a2e915703) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: refine typescript rules

- [#22](https://github.com/marcalexiei/void-0-configs/pull/22) [`68f0945`](https://github.com/marcalexiei/void-0-configs/commit/68f0945fb2d9d86fd463c36b0ea56278f250f380) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: disable `promise-function-async` to avoid conflicts with `require-await`

- [#24](https://github.com/marcalexiei/void-0-configs/pull/24) [`066c6a3`](https://github.com/marcalexiei/void-0-configs/commit/066c6a37bf9ae2446d6f1c0e420ba547c10d3fa0) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: refine base rules configuration

## 1.2.0

### Minor Changes

- [#16](https://github.com/marcalexiei/void-0-configs/pull/16) [`728c6c1`](https://github.com/marcalexiei/void-0-configs/commit/728c6c147fab6bad9ff7a952b6462f1404721490) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: add `vitest`

### Patch Changes

- [#18](https://github.com/marcalexiei/void-0-configs/pull/18) [`ca378e3`](https://github.com/marcalexiei/void-0-configs/commit/ca378e3991b69ca6667a33a35d30d97cdfaa8fbf) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: correct peerDependencies version range

## 1.1.0

### Minor Changes

- [#12](https://github.com/marcalexiei/void-0-configs/pull/12) [`0e01f4b`](https://github.com/marcalexiei/void-0-configs/commit/0e01f4be060c44825bb19ec40d5a86b4303ca890) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: add `unicorn` rules

## 1.0.1

### Patch Changes

- [`8cc0c2c`](https://github.com/marcalexiei/void-0-configs/commit/8cc0c2c330b764e506fb8265058e24bdd9efa7ad) Thanks [@marcalexiei](https://github.com/marcalexiei)! - fix: version bump due to wrong OIDC config on oxlint-config

## 1.0.0

### Major Changes

- [#6](https://github.com/marcalexiei/void-0-configs/pull/6) [`9b8d3b6`](https://github.com/marcalexiei/void-0-configs/commit/9b8d3b6cb48d258ad55708defac80ef1d4e88a9b) Thanks [@marcalexiei](https://github.com/marcalexiei)! - feat: initial release
