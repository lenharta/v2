import clsx from 'clsx';
import * as React from 'react';
import { PageContentComponentType, PageContentRenderType } from '../types';

const PageContentRender: PageContentRenderType = (props, ref) => {
  const { id = 'main-content', className, ...otherProps } = props;
  return <main {...otherProps} ref={ref} className={clsx('page-content', className)} />;
};

export const PageContent = React.forwardRef(PageContentRender) as PageContentComponentType;
PageContent.displayName = '@v2/Page.Content';
