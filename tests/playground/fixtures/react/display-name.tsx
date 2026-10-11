import { createContext, forwardRef } from 'react';

export const DisplayNameComponent = forwardRef<HTMLDivElement>((_props, ref) => (
  <div ref={ref}>DisplayNameComponent</div>
));

export const DisplayNameContext = createContext('');
