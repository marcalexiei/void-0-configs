import { describe, expect, it, vi } from 'vitest';

describe('something', () => {
  vi.advanceTimersByTime(1);

  it('awful', () => {
    expect(1).toBe(1);
  });

  it('tired of everything', () => {
    const fn = vi.fn();

    // should error
    expect(fn).toHaveBeenCalledOnce();

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
