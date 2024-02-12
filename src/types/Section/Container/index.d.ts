import * as React from 'react';

export type SectionContainerRootProps = {
  component?: 'div';
};

export type SectionContainerBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & SectionContainerRootProps;
};

export type SectionContainerRefProps = {
  Root: SectionContainerBaseProps['Root'] & React.RefAttributes<HTMLDivElement>;
};

export type SectionContainerComponents = {
  Root: React.ForwardRefExoticComponent<SectionContainerRefProps['Root']>;
};

export type SectionContainerRootComponent = SectionContainerComponents['Root'];
