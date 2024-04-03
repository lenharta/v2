import clsx from 'clsx';
import * as React from 'react';
import { ButtonProvider } from '../context';
import { ButtonGroupComponentType, ButtonGroupRenderType } from '../types';

export const ButtonGroupRender: ButtonGroupRenderType = (props, ref) => {
  const {
    size,
    loading,
    disabled,
    children,
    className,
    orientation = 'horizontal',
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      ref={ref}
      role="group"
      className={clsx('button-group', className)}
      aria-orientation={orientation}
    >
      <ButtonProvider value={{ size, loading, disabled, orientation }}>{children}</ButtonProvider>
    </div>
  );
};

export const ButtonGroup = React.forwardRef(ButtonGroupRender) as ButtonGroupComponentType;
ButtonGroup.displayName = '@v2/Button.Group';
