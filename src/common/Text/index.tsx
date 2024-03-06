import clsx from 'clsx';
import * as React from 'react';

export type TextBaseProps = React.JSX.IntrinsicElements['p'];

export interface TextProps extends TextBaseProps {}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { children, className, ...otherProps } = props;
  const clxss = clsx('Text', className);
  return (
    <p {...otherProps} ref={ref} className={clxss}>
      {children}
    </p>
  );
});
