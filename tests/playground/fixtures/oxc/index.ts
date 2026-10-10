export function isOutOfRange(value: number): boolean {
  // should error: the comparison can never be true
  return value < 1 && value > 10;
}

export function assertPositive(value: number): void {
  if (value < 0) {
    // should error: missing `throw`
    new Error('value must be positive');
  }
}

export function replaceDashes(value: string): string {
  // should error: missing `g` flag
  return value.replaceAll(/-/, '_');
}

// should error
export const enum Direction {
  Up = 'up',
  Down = 'down',
}
