import { readFile } from 'node:fs/promises';
import path from 'node:path';

import * as oxfmt from 'oxfmt';
import { describe, expect, it } from 'vitest';

import config from '../src/config.js';

const fixturesDir = path.join(import.meta.dirname, 'fixtures');

async function getFmtResultFor(
  exampleName: string,
): Promise<{ code: string; outputFilePath: string }> {
  const content = await readFile(path.join(fixturesDir, `${exampleName}.input.ts`), 'utf-8');

  const fmtResult = await oxfmt.format(
    path.join(fixturesDir, `${exampleName}.input.ts`),
    content,
    config,
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
});
