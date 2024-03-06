import clsx from 'clsx';
import * as React from 'react';

export type TitleBaseProps = React.JSX.IntrinsicElements['h1'];

export interface TitleProps extends TitleBaseProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
}

const findTitleLevel = (props: Partial<TitleProps>) => {
  const { h1, h2, h3, h4, h5, h6 } = props;
  if (h1) return 'h1';
  if (h2) return 'h2';
  if (h3) return 'h3';
  if (h4) return 'h4';
  if (h5) return 'h5';
  if (h6) return 'h6';
  return 'h3';
};

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { h1, h2, h3, h4, h5, h6, children, className, ...otherProps } = props;
  const Component = findTitleLevel({ h1, h2, h3, h4, h5, h6 });
  const clxss = clsx(`Title`, className);
  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
