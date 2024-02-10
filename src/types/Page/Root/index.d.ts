import * as React from 'react';
import { PageContainerComponent } from '../Container';
import { PageContentComponent } from '../Content';
import { PageFooterComponent } from '../Footer';
import { PageHeaderComponent } from '../Header';
import { PageHeroComponent } from '../Hero';

export type PageRootProps = {};

export type PageBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & PageRootProps;
};

export type PageProps = {
  Root: PageBaseProps['Root'];
};

export type PageComponents = {
  Root: React.FC<PageProps['Root']>;
};

export type PageRootComponent = PageComponents['Root'] & {
  Container: PageContainerComponent;
  Content: PageContentComponent;
  Footer: PageFooterComponent;
  Header: PageHeaderComponent;
  Hero: PageHeroComponent;
};
