import type { JSX } from 'react';

interface TestProps {
  isActive: boolean;
}

export function Test(props: TestProps): JSX.Element {
  const { isActive } = props;
  return <>{isActive}</>;
}

export function TestProva(): JSX.Element {
  return <Test isActive={true} />;
}
