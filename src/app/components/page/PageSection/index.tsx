import clsx from 'clsx';
import * as React from 'react';
import { PageSectionComponentType, PageSectionRenderType } from '../types';

const PageSectionRender: PageSectionRenderType = (props, ref) => {
  const { className, ...otherProps } = props;
  return <section {...otherProps} ref={ref} className={clsx('page-section', className)} />;
};

export const PageSection = React.forwardRef(PageSectionRender) as PageSectionComponentType;
PageSection.displayName = '@v2/Page.Section';
