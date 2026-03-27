// ok
export function myPromise(): Promise<string> {
  return Promise.resolve('1');
}

// function async without await
export async function returnSomethingAsyncButNowAwait(): Promise<string> {
  const data = myPromise();
  return data;
}
