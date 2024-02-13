import * as React from 'react';
import { TitleRefProps } from '@/types';

export type SectionHeaderRootProps = {
  /** Defines the content of the `<Title />` component */
  title?: React.ReactNode;

  /** Specifies other properties for the `<Title />` component */
  titleProps?: TitleRefProps['Root'];

  /** Defines the tag name for the rendered root element */
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
