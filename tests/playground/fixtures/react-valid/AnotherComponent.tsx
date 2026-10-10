import { useCallback, useEffect, useState } from 'react';
import type { JSX } from 'react';

import { TestComponent } from './TestComponent';

export function AnotherComponent(): JSX.Element {
  const [foo, setFoo] = useState('');

  useEffect(() => {
    foo.slice(0, 1);
  }, [foo]);

  const handleClick = useCallback(() => {
    setFoo('ciao');
  }, []);

  return (
    <>
      <span>{foo}</span>
      <button type="button" onClick={handleClick}>
        edit foo
      </button>
      <TestComponent />
    </>
  );
}
