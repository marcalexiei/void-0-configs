import { memo } from 'react';
import type { JSX } from 'react';

export const Memoized = memo(function Memoized(): JSX.Element {
  return <div />;
});
