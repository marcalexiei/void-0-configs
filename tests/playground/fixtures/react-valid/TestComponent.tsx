import { useState } from 'react';
import type { JSX } from 'react';

import type { MyModel } from './models';

interface TestComponentProps {
  data?: MyModel;
}

export function TestComponent(props: TestComponentProps): JSX.Element {
  const { data } = props;

  const [myState] = useState('something');

  return (
    <>
      TestComponent {data?.boh} {myState}
    </>
  );
}
