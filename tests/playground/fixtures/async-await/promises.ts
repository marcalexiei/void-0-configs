// ok
export function myPromise(): Promise<string> {
  return Promise.resolve('1');
}

// not reported: typescript/require-await accepts an async function returning a promise
export async function returnSomethingAsyncButNowAwait(): Promise<string> {
  const data = myPromise();
  return data;
}
