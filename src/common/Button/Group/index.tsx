import { mergeProps } from '@/utils';
import * as React from 'react';

type ButtonGroupBaseProps = React.JSX.IntrinsicElements['div'];

export interface ButtonGroupProps extends ButtonGroupBaseProps {
  orientation?: 'horizontal' | 'vertical';
}

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'horizontal',
};

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const { children, orientation, ...otherProps } = props;
  const mergedProps = mergeProps({ orientation }, defaultProps);
  return (
    <div
      {...otherProps}
      ref={ref}
      role="group"
      className="Button-group"
      data-orientation={mergedProps.orientation}
      aria-orientation={mergedProps.orientation}
    >
      {children}
    </div>
  );
});
