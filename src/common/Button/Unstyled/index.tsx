import * as React from 'react';

type UnstyledButtonElementProps = React.ComponentPropsWithoutRef<'button'>;
type UnstyledButtonRefProps = React.RefAttributes<HTMLButtonElement>;
type UnstyledButtonBaseProps = UnstyledButtonElementProps & UnstyledButtonRefProps;

export interface UnstyledButtonProps extends UnstyledButtonBaseProps {}

function _UnstyledButton(props: UnstyledButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { ...otherProps } = props;
  return <button {...otherProps} ref={ref} />;
}

export type UnstyledButtonComponent = React.ForwardRefExoticComponent<UnstyledButtonProps>;
export const UnstyledButton = React.forwardRef(_UnstyledButton) as UnstyledButtonComponent;
