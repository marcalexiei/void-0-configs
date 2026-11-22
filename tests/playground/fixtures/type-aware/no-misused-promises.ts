// should error once: typescript/no-misused-promises
export function isReady(ready: Promise<boolean> | boolean): string {
  return ready ? 'ready' : 'waiting';
}
