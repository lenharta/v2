import clsx from 'clsx';
import * as React from 'react';
import { BaseProps } from '@/types';

export type TitleProps = BaseProps<'h2'> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { as: Component = 'h2', children, className, ...otherProps } = props;
  const clxss = clsx(`title title--${Component}`, className);
  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
