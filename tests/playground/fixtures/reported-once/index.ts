import { readFile } from 'node:fs';
import { writeFile } from 'node:fs';

function probe(flag: boolean, other: boolean, list: Array<string>, text: string): Array<unknown> {
  const nested = flag ? 1 : other ? 2 : 3;
  const isArray = list instanceof Array;
  const sliced = text.slice(1, text.length);
  const starts = /^abc/.test(text);
  const timer = setTimeout('probe()', 10);

  return [nested, isArray, sliced, starts, timer, readFile, writeFile];
}

export { probe };
