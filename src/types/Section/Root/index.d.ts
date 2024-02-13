import * as React from 'react';

import { SectionContainerRootComponent } from '../Container';
import { SectionContentRootComponent } from '../Content';
import { SectionHeaderRootComponent } from '../Header';

export type SectionRootProps = {
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
