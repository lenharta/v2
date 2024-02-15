import clsx from 'clsx';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Icon } from '../Icon';
import { Surface } from '../Surface';
import { surfaceToken } from '../utils';
import { useThemeCTX } from '@/store';
import { generateRandomId } from '@/utils';
import { Core } from '@/types/core';
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
    size,
    style,
    surface = 'blue',
    children,
    className,
    component: Component = Link,
    ...otherProps
  } = props;

  const theme = useThemeCTX();
  const { accent, avatar } = theme.state;
  const tokenValue = accent as SurfaceToken;
  const tokenClxss = `Avatar--${generateRandomId(8)}`;
  const clxss = clsx('Avatar', { [`Avatar--size-${size}`]: size }, tokenClxss, className);
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
