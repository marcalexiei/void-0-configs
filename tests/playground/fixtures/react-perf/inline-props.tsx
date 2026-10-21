import type { CSSProperties, JSX, ReactNode } from 'react';

interface ItemProps {
  icon: ReactNode;
  onSelect: () => void;
  style: CSSProperties;
  tags: Array<string>;
}

export function Item(props: ItemProps): JSX.Element {
  const { icon, onSelect, style, tags } = props;

  return (
    <button type="button" style={style} onClick={onSelect}>
      {icon} {tags.join(', ')}
    </button>
  );
}

export function List(): JSX.Element {
  return (
    <div style={{ display: 'flex' }}>
      <button type="button" onClick={() => {}}>
        native
      </button>
      <Item icon={<span />} onSelect={() => {}} style={{ color: 'red' }} tags={['a', 'b']} />
    </div>
  );
}
