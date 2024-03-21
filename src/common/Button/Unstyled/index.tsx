import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types';

export interface UnstyledButtonProps extends ElementProps<'button'> {}

const defaultProps: Partial<UnstyledButtonProps> = {};

export const UnstyledButton = React.forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  (props, ref) => {
    const { ...otherProps } = mergeProps(defaultProps, props);
    return <button {...otherProps} ref={ref} />;
  }
);

UnstyledButton.displayName = '@v2/Button.Unstyled';
