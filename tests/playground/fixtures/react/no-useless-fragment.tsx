import type { JSX } from 'react';

export function Test(): JSX.Element {
  return (
    <section>
      <>
        <div />
        <div />
      </>
    </section>
  );
}

export function Test2(): JSX.Element {
  return <></>;
}
