import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { OxfmtConfig, OxfmtOverrideConfig, SortImportsConfig } from 'oxfmt';
import * as oxfmt from 'oxfmt';
import { describe, expect, it } from 'vitest';

import { defineConfig } from '../src/config.js';

const fixturesDir = path.join(import.meta.dirname, 'fixtures');

async function getFmtResultFor(
  exampleName: string,
): Promise<{ code: string; outputFilePath: string }> {
  const content = await readFile(path.join(fixturesDir, `${exampleName}.input.ts`), 'utf-8');

  const fmtResult = await oxfmt.format(
    path.join(fixturesDir, `${exampleName}.input.ts`),
    content,
    defineConfig(),
  );

  return {
    code: fmtResult.code,
    outputFilePath: path.join(fixturesDir, `${exampleName}.output.ts`),
  };
}

describe('config', () => {
  it('example', async () => {
    const { code, outputFilePath } = await getFmtResultFor('example');
    await expect(code).toMatchFileSnapshot(outputFilePath);
  });

  it('imports', async () => {
    const { code, outputFilePath } = await getFmtResultFor('imports');
    await expect(code).toMatchFileSnapshot(outputFilePath);
  });

  it('import-side-effect', async () => {
    const { code, outputFilePath } = await getFmtResultFor('import-side-effect');
    await expect(code).toMatchFileSnapshot(outputFilePath);
  });
});

function sortImportsOf(config: OxfmtConfig): SortImportsConfig {
  const { sortImports } = config;

  if (typeof sortImports !== 'object') {
    throw new TypeError('expected sortImports to be an object');
  }

  return sortImports;
}

describe('defineConfig', () => {
  it('returns the preset when called without arguments', () => {
    expect(defineConfig()).toEqual(defineConfig({}));
    expect(defineConfig().printWidth).toBe(100);
  });

  it('overrides top level options', () => {
    const config = defineConfig({ printWidth: 120, semi: false });

    expect(config.printWidth).toBe(120);
    expect(config.semi).toBe(false);
    expect(config.singleQuote).toBe(true);
  });

  it('merges sortImports one level deep', () => {
    const config = defineConfig({ sortImports: { newlinesBetween: false } });

    expect(sortImportsOf(config)).toEqual({
      groups: sortImportsOf(defineConfig()).groups,
      newlinesBetween: false,
    });
  });

  it('replaces sortImports groups instead of concatenating them', () => {
    const config = defineConfig({ sortImports: { groups: ['builtin', 'external'] } });

    expect(sortImportsOf(config).groups).toEqual(['builtin', 'external']);
  });

  it('keeps the jsonc override', () => {
    expect(defineConfig().overrides).toEqual([
      { files: ['**/*.jsonc'], options: { trailingComma: 'none' } },
    ]);
  });

  it('appends user overrides after the preset ones', () => {
    const userOverride: OxfmtOverrideConfig = {
      files: ['**/*.md'],
      options: { proseWrap: 'always' },
    };
    const config = defineConfig({ overrides: [userOverride] });

    expect(config.overrides).toEqual([
      { files: ['**/*.jsonc'], options: { trailingComma: 'none' } },
      userOverride,
    ]);
  });

  it('allows disabling sortImports', () => {
    expect(defineConfig({ sortImports: false }).sortImports).toBe(false);
  });

  it('does not mutate the preset between calls', () => {
    defineConfig({ printWidth: 120, sortImports: { newlinesBetween: false } });

    expect(defineConfig().printWidth).toBe(100);
    expect(sortImportsOf(defineConfig()).newlinesBetween).toBe(true);
  });
});
