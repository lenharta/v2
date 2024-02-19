import clsx from 'clsx';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import { mergeProps } from '@/utils';
import { useThemeCTX } from '@/store';
import { Avatar as AvatarIcon } from '@/types/store';
import type { LinkProps } from 'react-router-dom';
import type { Size } from '@/types/common';
import type { Core } from '@/types/core';

export type AvatarProps = LinkProps & {
  avatar?: AvatarIcon;
  size?: Size;
};

export type AvatarFactory = Core.RefFactory<{
  ref: HTMLAnchorElement;
  props: AvatarProps;
  component: typeof Link;
}>;

const defaultProps: Partial<AvatarProps> = {
  avatar: 'person',
  size: 'sm',
  to: '/',
};

export const Avatar: AvatarFactory = React.forwardRef((props, ref) => {
  const {
    to,
    size,
    avatar,
    children,
    className,
    component: Component = Link,
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ to, size, avatar }, defaultProps);

  const theme = useThemeCTX();
  const clxss = clsx('Avatar', className);

  return (
    <Component {...otherProps} to={to} ref={ref} className={clxss}>
      <Icon name={theme.state.avatar || mergedProps.avatar} size={mergedProps.size} />
    </Component>
  );
});
