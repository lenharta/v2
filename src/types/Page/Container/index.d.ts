import React from 'react';

export type PageContainerRootProps = {};

export type PageContainerBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & PageContainerRootProps;
};

export type PageContainerProps = {
  Root: PageContainerBaseProps['Root'] & React.RefAttributes<HTMLDivElement>;
};

export type PageContainerComponents = {
  Root: React.ForwardRefExoticComponent<PageContainerProps['Root']>;
};

export type PageContainerRootComponent = PageContainerComponents['Root'];
