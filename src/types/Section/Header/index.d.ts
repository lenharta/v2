import * as React from 'react';

export type SectionHeaderRootProps = {
  component?: 'header';
};

export type SectionHeaderBaseProps = {
  Root: React.JSX.IntrinsicElements['header'] & SectionHeaderRootProps;
};

export type SectionHeaderRefProps = {
  Root: SectionHeaderBaseProps['Root'] & React.RefAttributes<HTMLElement>;
};

export type SectionHeaderComponents = {
  Root: React.ForwardRefExoticComponent<SectionHeaderRefProps['Root']>;
};

export type SectionHeaderRootComponent = SectionHeaderComponents['Root'];
