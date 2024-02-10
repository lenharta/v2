import * as React from 'react';
import { Link } from 'react-router-dom';
import type { AvatarRootComponent } from '@/types';

export const Avatar: AvatarRootComponent = React.forwardRef((props, ref) => {
  const { to = '/', component: Component = Link, children } = props;
  const clxss = `Avatar`;
  return (
    <Component to={to} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
