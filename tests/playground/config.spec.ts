import { spawn } from 'node:child_process';

import { describe, expect, it } from 'vitest';

interface Diagnostics {
  filename: string;
}

/**
 * File are not returned in a consistent order.
 * Using filename as "id" to sort them out should allow snapshot usage
 */
function normalizeDiagnostics(asd: Array<Diagnostics>): void {
  // oxlint-disable-next-line id-length
  asd.sort((x, y) => {
    if (x.filename < y.filename) {
      return -1;
    }
    if (x.filename > y.filename) {
      return 1;
    }
    return 0;
  });
}

function run(fixturePath: string): Promise<{
  code: number;
  stdout: string;
  stderr: string;
  diagnostics: Array<Diagnostics>;
}> {
  return new Promise((resolve, reject) => {
    const proc = spawn('pnpm', ['oxlint', '--format=json', fixturePath]);

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => (stdout += data));
    proc.stderr.on('data', (data) => (stderr += data));

    proc.on('close', (code) => {
      const diagnostics = JSON.parse(stdout).diagnostics as Array<Diagnostics>;
      normalizeDiagnostics(diagnostics);

      resolve({ code: code as number, diagnostics, stderr, stdout });
    });

    proc.on('error', reject);
  });
}

describe('config', () => {
  it('typescript', async () => {
    const { code, diagnostics } = await run('./fixtures/typescript');

    expect(code).toBe(1);
    expect(diagnostics).toMatchSnapshot();
  });

  it('import-no-cycle', async () => {
    const { code, diagnostics } = await run('./fixtures/import-no-cycle');

    expect(code).toBe(1);
    expect(diagnostics).toMatchSnapshot();
  });

  it('import-type', async () => {
    const { code, diagnostics } = await run('./fixtures/import-type');

    expect(code).toBe(1);
    expect(diagnostics).toMatchSnapshot();
  });

  it('type-aware', async () => {
    const { code, diagnostics } = await run('./fixtures/type-aware');

    expect(code).toBe(1);
    expect(diagnostics).toMatchSnapshot();
  });

  it('type-aware', async () => {
    const { code, diagnostics } = await run('./fixtures/vitest');

    expect(code).toBe(1);
    expect(diagnostics).toMatchSnapshot();
  });
});
