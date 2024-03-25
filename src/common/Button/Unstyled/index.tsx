import * as React from 'react';
import { UnstyledButtonRenderType, UnstyledButtonComponentType } from '../types';

const UnstyledButtonRender: UnstyledButtonRenderType = (props, ref) => {
  const { ...otherProps } = props;
  return <button {...otherProps} ref={ref} />;
};

export const UnstyledButton = React.forwardRef(UnstyledButtonRender) as UnstyledButtonComponentType;
UnstyledButton.displayName = '@v2/Button.Unstyled';
