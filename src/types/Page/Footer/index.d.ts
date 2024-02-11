import React from 'react';

export type PageFooterRootProps = {};

export type PageFooterBaseProps = {
  Root: React.JSX.IntrinsicElements['footer'] & PageFooterRootProps;
};

export type PageFooterProps = {
  Root: PageFooterBaseProps['Root'] & React.RefAttributes<HTMLElement>;
};

export type PageFooterComponents = {
  Root: React.ForwardRefExoticComponent<PageFooterProps['Root']>;
};

export type PageFooterRootComponent = PageFooterComponents['Root'];
