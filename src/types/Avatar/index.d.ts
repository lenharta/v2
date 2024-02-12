import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { AccentKey, AvatarKey } from '../store';

export type AvatarRootProps = LinkProps & {
  component?: 'a' | typeof Link;
  // accent?: AccentKey;
  avatar?: AvatarKey;
};

export type AvatarBaseProps = {
  Root: React.JSX.IntrinsicElements['a'] & AvatarRootProps;
};

export type AvatarRefProps = {
  Root: AvatarBaseProps['Root'] & React.RefAttributes<HTMLAnchorElement>;
};

export type AvatarComponents = {
  Root: React.ForwardRefExoticComponent<AvatarRefProps['Root']>;
};

export type AvatarRootComponent = AvatarComponents['Root'];
