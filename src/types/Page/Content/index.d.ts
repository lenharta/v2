import * as React from 'react';

export type PageContentRootProps = {};

export type PageContentBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & PageContentRootProps;
};

export type PageContentProps = {
  Root: PageContentBaseProps['Root'] & React.RefAttributes<HTMLDivElement>;
};

export type PageContentComponents = {
  Root: React.ForwardRefExoticComponent<PageContentProps['Root']>;
};

export type PageContentRootComponent = PageContentComponents['Root'];
