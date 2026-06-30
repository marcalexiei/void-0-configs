# @marcalexiei/oxlint-config

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
