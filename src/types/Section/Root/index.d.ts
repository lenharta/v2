import * as React from 'react';
import { SurfaceToken } from '@/types';
// import { Accent } from '@/types';

import { SectionContainerRootComponent } from '../Container';
import { SectionContentRootComponent } from '../Content';
import { SectionHeaderRootComponent } from '../Header';

export type SectionSurfaceLevel = 'L0' | 'L1' | 'L2' | 'L3' | 'L4';
export type SectionSurfaceOptions = { level?: SectionSurfaceLevel; type?: SurfaceToken };

export type SectionRootProps = {
  component?: 'section';
  surfaceOptions?: SectionSurfaceOptions;
};

export type SectionBaseProps = {
  Root: React.JSX.IntrinsicElements['section'] & SectionRootProps;
};

export type SectionRefProps = {
  Root: SectionBaseProps['Root'];
};

export type SectionComponents = {
  Root: React.FC<SectionRefProps['Root']>;
};

export type SectionRootComponent = SectionComponents['Root'] & {
  Container: SectionContainerRootComponent;
  Content: SectionContentRootComponent;
  Header: SectionHeaderRootComponent;
};
