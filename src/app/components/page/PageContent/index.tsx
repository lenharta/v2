import clsx from 'clsx';
import * as React from 'react';
import { PageContentComponentType, PageContentRenderType } from '../types';

const PageContentRender: PageContentRenderType = ({ id, className, ...otherProps }, ref) => {
  return (
    <main
      {...otherProps}
      ref={ref}
      id={id || 'main-content'}
      className={clsx('page-content', className)}
    />
  );
};

export const PageContent = React.forwardRef(PageContentRender) as PageContentComponentType;
PageContent.displayName = '@v2/Page.Content';
