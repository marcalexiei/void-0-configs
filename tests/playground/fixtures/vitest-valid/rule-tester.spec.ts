import { describe, expect, it } from 'vitest';

const ruleTester = {
  run(name: string, cases: Array<string>): void {
    describe(name, () => {
      it.each(cases)('accepts %s', (code) => {
        expect(code).toBeTypeOf('string');
      });
    });
  },
};

ruleTester.run('my-rule', ['const value = 1;']);
