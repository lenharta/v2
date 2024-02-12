import * as React from 'react';

export type SectionContentRootProps = {
  component?: 'div';
};

export type SectionContentBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & SectionContentRootProps;
};

export type SectionContentRefProps = {
  Root: SectionContentBaseProps['Root'] & React.RefAttributes<HTMLDivElement>;
};

export type SectionContentComponents = {
  Root: React.ForwardRefExoticComponent<SectionContentRefProps['Root']>;
};

export type SectionContentRootComponent = SectionContentComponents['Root'];
