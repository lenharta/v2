import * as React from 'react';
import { mergeProps } from '@/utils';
import { UnstyledButtonProps, UnstyledButtonRenderType, UnstyledButtonComponent } from '../types';

const defaultProps: Partial<UnstyledButtonProps> = {};

const UnstyledButtonRender: UnstyledButtonRenderType = (props, ref) => {
  const { ...otherProps } = mergeProps(defaultProps, props);
  return <button {...otherProps} ref={ref} />;
};

export const UnstyledButton = React.forwardRef(UnstyledButtonRender) as UnstyledButtonComponent;
UnstyledButton.displayName = '@v2/Button.Unstyled';
