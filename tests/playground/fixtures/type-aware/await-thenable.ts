await 12;
await (() => {});

// Non-Promise values
await Math.random;
await { then() {} };

// This is not a Promise - it's a function that returns a Promise
declare const getPromise: () => Promise<string>;
await getPromise;
