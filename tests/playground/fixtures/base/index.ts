// should error: unicorn/import-style asks for the default import
import { join } from 'node:path';

const root = join('one', 'two');

function double(items: Array<number>): Array<number> {
  // should error: prefer-arrow-callback
  return items.map(function twice(item) {
    return item * 2;
  });
}

export { double, root };
