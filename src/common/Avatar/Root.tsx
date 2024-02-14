import clsx from 'clsx';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../Icon';
import { Surface } from '../Surface';
import { useThemeCTX } from '@/store';
import { surfaceToken } from '../utils';
import { generateRandomId } from '@/utils';
import type { AvatarRootComponent, SurfaceToken } from '@/types';

export const Avatar: AvatarRootComponent = React.forwardRef((props, ref) => {
  const {
    to = '/',
    style,
    avatar = 'person',
    surface = 'blue',
    children,
    className,
    component: Component = Link,
    ...otherProps
  } = props;

  const theme = useThemeCTX();
  const { accent } = theme.state;

  const tokenValue = accent as SurfaceToken;
  const tokenClxss = `Avatar--${generateRandomId(8)}`;
  const clxss = clsx('Avatar', tokenClxss, className);

  return (
    <>
      <Surface
        selector={tokenClxss}
        baseConfig={{
          color: surfaceToken(tokenValue, 1),
          borderColor: surfaceToken(tokenValue, 0.5),
          backgroundColor: surfaceToken(tokenValue, 0.1),
        }}
        hoverConfig={{
          color: surfaceToken(tokenValue, 1),
          borderColor: surfaceToken(tokenValue, 0.5),
          backgroundColor: surfaceToken(tokenValue, 0.15),
        }}
      />
      <Component {...otherProps} to={to} ref={ref} className={clxss}>
        <Icon name={avatar} className="Avatar-icon" />
      </Component>
    </>
  );
});
