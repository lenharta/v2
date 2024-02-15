import * as React from 'react';
import { Size } from '../common';

export type SpaceRootProps = {
  size?: Size;
};

export type SpaceBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & SpaceRootProps;
};

export type SpaceComponents = {
  Root: React.FC<SpaceBaseProps['Root']>;
};

export type SpaceRootComponent = SpaceComponents['Root'];
