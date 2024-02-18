import clsx from 'clsx';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import { Surface } from '../Surface';
import { useSurface } from '@/hooks';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';
import { Avatar as AvatarIcon } from '@/types/store';
import type { Core } from '@/types/core';
import type { LinkProps } from 'react-router-dom';
import type { Size, SurfaceToken } from '@/types/common';

export type AvatarProps = LinkProps & {
  surface?: SurfaceToken;
  avatar?: AvatarIcon;
  size?: Size;
};

export type AvatarFactory = Core.RefFactory<{
  ref: HTMLAnchorElement;
  props: AvatarProps;
  component: typeof Link;
}>;

const defaultProps: Partial<AvatarProps> = {
  surface: 'blue',
  avatar: 'person',
  size: 'sm',
  to: '/',
};

export const Avatar: AvatarFactory = React.forwardRef((props, ref) => {
  const {
    to,
    size,
    avatar,
    surface,
    children,
    className,
    component: Component = Link,
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ to, size, surface, avatar }, defaultProps);

  const theme = useThemeCTX();

  const token = useSurface({
    surfaceId: 'Avatar',
    surface: theme.state.accent || mergedProps.surface,
    mode: theme.state.mode,
  });

  const baseSurfaceConfig = token.base();
  const hoverSurfaceConfig = token.hover();

  const clxss = clsx('Avatar', token.clxss, className);

  return (
    <>
      <Surface
        selector={token.clxss}
        baseConfig={baseSurfaceConfig}
        hoverConfig={hoverSurfaceConfig}
      />
      <Component {...otherProps} to={to} ref={ref} className={clxss}>
        <Icon name={theme.state.avatar || mergedProps.avatar} size={mergedProps.size} />
      </Component>
    </>
  );
});
