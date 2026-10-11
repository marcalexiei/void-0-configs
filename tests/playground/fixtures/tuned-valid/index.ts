import * as z from 'zod';

import './style.css';

const schema = z.object({
  tags: z.array(z.optional(z.nullable(z.string()))),
});

function label(kind: 'first' | 'second'): string {
  switch (kind) {
    case 'first':
      return 'one';
    case 'second':
      return 'two';
    default:
      throw new Error('unknown kind');
  }
}

function second(_: string, value: number): number {
  return value;
}

export { label, schema, second };
