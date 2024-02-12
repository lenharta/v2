import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Accent } from '../store';

export type AvatarRootProps = LinkProps & {
  component?: 'a' | typeof Link;
  accent?: Accent;
  avatar?: Avatar;
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
