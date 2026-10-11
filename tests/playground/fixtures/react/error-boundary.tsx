import { Component } from 'react';
import type { ReactNode } from 'react';

interface BoundaryProps {
  children: ReactNode;
}

interface BoundaryState {
  hasError: boolean;
}

export class Boundary extends Component<BoundaryProps, BoundaryState> {
  override state: BoundaryState = { hasError: false };

  override componentDidCatch(): void {
    // should error: react/no-direct-mutation-state
    this.state.hasError = true;
  }

  override render(): ReactNode {
    return this.state.hasError ? null : this.props.children;
  }
}
