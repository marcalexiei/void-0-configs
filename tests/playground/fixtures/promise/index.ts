export function load(source: Promise<string>): Promise<number> {
  return (
    source
      // should error: the first `then` returns nothing
      .then((value) => {
        value.trim();
      })
      .then(() => 1)
  );
}

export function wait(isReady: boolean): Promise<string> {
  // should error: parameters names
  return new Promise((yes, no) => {
    if (isReady) {
      yes('ready');
    }
    // should error: already resolved
    yes('done');
    no(new Error('never'));
  });
}
