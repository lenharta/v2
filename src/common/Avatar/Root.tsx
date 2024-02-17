import clsx from 'clsx';
import * as React from 'react';

import { Link, LinkProps } from 'react-router-dom';
import { surfaceToken } from '../utils';
import { Surface } from '../Surface';
import { Icon } from '../Icon';

import { useThemeCTX } from '@/store';
import { generateRandomId } from '@/utils';
import type { Core } from '@/types/core';
import type { Size, SurfaceToken } from '@/types/common';

export type AvatarProps = LinkProps & {
  surface?: SurfaceToken;
  size?: Size;
};

export type AvatarFactory = Core.RefFactory<{
  ref: HTMLAnchorElement;
  props: AvatarProps;
  component: typeof Link;
}>;

export const Avatar: AvatarFactory = React.forwardRef((props, ref) => {
  const {
    to = '/',
    size = 'sm',
    surface = 'blue',
    component: Component = Link,
    className,
    children,
    style,
    ...otherProps
  } = props;

  const theme = useThemeCTX();
  const { state } = theme;

  const token = `Avatar--${generateRandomId(8)}`;
  const clxss = clsx('Avatar', { [`Avatar--size-${size}`]: size }, token, className);

  return (
    <>
      <Surface
        selector={token}
        baseConfig={{
          color: surfaceToken(state.accent, 1),
          borderColor: surfaceToken(state.accent, 0.5),
          backgroundColor: surfaceToken(state.accent, 0.1),
        }}
        hoverConfig={{
          color: surfaceToken(state.accent, 1),
          borderColor: surfaceToken(state.accent, 0.5),
          backgroundColor: surfaceToken(state.accent, 0.15),
        }}
      />
      <Component {...otherProps} to={to} ref={ref} className={clxss}>
        <Icon name={state.avatar} className="Avatar-icon" />
      </Component>
    </>
  );
});
