import * as React from 'react';

export type ChipItemBaseProps = React.JSX.IntrinsicElements['button'];

export interface ChipItemProps extends ChipItemBaseProps {}

export const ChipItem = React.forwardRef<HTMLButtonElement, ChipItemProps>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <button {...otherProps} ref={ref}>
      {children}
    </button>
  );
});

ChipItem.displayName = '@v2/Chip.Item';
