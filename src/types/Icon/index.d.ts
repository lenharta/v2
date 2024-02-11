import * as React from 'react';
import { DATA_ICON_LOOKUP } from '@/data';

export type IconType = keyof typeof DATA_ICON_LOOKUP;
export type IconName = keyof (typeof DATA_ICON_LOOKUP)['filled'];

export type IconRootProps = {
  type?: IconType;
  name?: IconName;
  component?: 'svg';
};

export type IconBaseProps = {
  Root: React.JSX.IntrinsicElements['svg'] & IconRootProps;
};

export type IconProps = {
  Root: IconBaseProps['Root'] & React.RefAttributes<SVGSVGElement>;
};

export type IconComponents = {
  Root: React.ForwardRefExoticComponent<IconProps['Root']>;
};

export type IconRootComponent = IconComponents['Root'];
