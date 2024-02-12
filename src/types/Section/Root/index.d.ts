import * as React from 'react';
import { SectionContainerComponents } from '../Container';

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
  Container: SectionContainerComponents['Root'];
  Content: SectionContentComponents['Root'];
  Header: SectionHeaderComponents['Root'];
};
