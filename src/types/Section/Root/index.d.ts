import * as React from 'react';

import { SectionContainerRootComponent } from '../Container';
import { SectionContentRootComponent } from '../Content';
import { SectionHeaderRootComponent } from '../Header';

type SchemeMod = 'static' | 'interactive';
type SchemeType = 'primary' | 'secondary';
type SchemeLevel = 0 | 1 | 2 | 3 | 4;

export type SectionRootProps = {
  surface?: { type?: SchemeType; level?: SchemeLevel; mod?: SchemeMod };
  component?: 'section';
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
