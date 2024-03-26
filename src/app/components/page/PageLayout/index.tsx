import clsx from 'clsx';
import * as React from 'react';
import { PageLayoutComponentType, PageLayoutRenderType } from '../types';

export const PageLayoutRender: PageLayoutRenderType = (props, ref) => {
  const { className, ...otherProps } = props;
  return <div {...otherProps} id="page" ref={ref} className={clsx('page-layout', className)} />;
};

export const PageLayout = React.forwardRef(PageLayoutRender) as PageLayoutComponentType;
PageLayout.displayName = '@v2/Page.Layout';
