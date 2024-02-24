import * as React from 'react';

type UnstyledButtonBaseProps = React.JSX.IntrinsicElements['button'];

export interface UnstyledButtonProps extends UnstyledButtonBaseProps {}

export const UnstyledButton = React.forwardRef<HTMLButtonElement, UnstyledButtonBaseProps>(
  (props, ref) => {
    const { ...otherProps } = props;
    return <button {...otherProps} ref={ref} />;
  }
);
