interface Data {
  name: string;
}

// should error once: typescript/no-generated-empty-object-type
export type Empty = Omit<Data, 'name'>;

// should error once: typescript/require-await
export async function noAwait(): Promise<number> {
  return 1;
}

// should error once: typescript/only-throw-error
export function thrower(): never {
  throw 'literal';
}

// should error once: typescript/prefer-promise-reject-errors
export function rejecter(): Promise<never> {
  return Promise.reject('literal');
}

// should error once: typescript/no-floating-promises
export function fire(source: Promise<string>): void {
  source.then((value) => value.trim());
}
