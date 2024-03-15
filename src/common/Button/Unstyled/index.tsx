import * as React from 'react';
import { mergeProps } from '@/utils';

type UnstyledButtonBaseProps = React.ComponentPropsWithoutRef<'button'>;

export interface UnstyledButtonProps extends UnstyledButtonBaseProps {}

const defaultProps: Partial<UnstyledButtonProps> = {};

function _UnstyledButton(props: UnstyledButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { ...otherProps } = mergeProps(defaultProps, props);
  return <button {...otherProps} ref={ref} />;
}

export const UnstyledButton = React.forwardRef(_UnstyledButton) as React.ForwardRefExoticComponent<
  UnstyledButtonProps & React.RefAttributes<HTMLButtonElement>
>;

UnstyledButton.displayName = '@v2/Button.Unstyled';
