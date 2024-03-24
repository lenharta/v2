import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ButtonProvider } from '../context';
import { ButtonGroupComponent, ButtonGroupRenderType, ButtonGroupProps } from '../types';

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'horizontal',
};

export const ButtonGroupRender: ButtonGroupRenderType = (props, ref) => {
  const { orientation, size, children, loading, disabled, className, ...otherProps } = mergeProps(
    defaultProps,
    props
  );

  return (
    <div
      {...otherProps}
      ref={ref}
      role="group"
      className={clsx('button-group', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      <ButtonProvider value={{ orientation, size, loading, disabled }}>{children}</ButtonProvider>
    </div>
  );
};

export const ButtonGroup = React.forwardRef(ButtonGroupRender) as ButtonGroupComponent;
ButtonGroup.displayName = '@v2/Button.Group';
