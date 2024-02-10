import * as React from 'react';
import { Link } from 'react-router-dom';

import type { Size } from '@/types';
import type { LinkProps } from 'react-router-dom';
import type { AvatarComponent } from '@/factory';

export type AvatarProps = LinkProps & {
  component?: typeof Link;
  size?: Size;
};

export const Avatar: AvatarComponent = React.forwardRef((props, ref) => {
  const { to = '/', size = 'sm', component: Component = Link, children } = props;
  const clxss = `avatar avatar--size-${size}`;
  return (
    <Component to={to} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
