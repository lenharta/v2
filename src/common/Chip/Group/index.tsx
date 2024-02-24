import * as React from 'react';

export type ChipGroupBaseProps = React.JSX.IntrinsicElements['div'];

export interface ChipGroupProps extends ChipGroupBaseProps {}

export const ChipGroup = React.forwardRef<HTMLDivElement, ChipGroupProps>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref}>
      {children}
    </div>
  );
});

ChipGroup.displayName = '@v2/Chip.Group';
