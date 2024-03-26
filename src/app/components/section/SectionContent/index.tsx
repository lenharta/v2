import clsx from 'clsx';
import * as React from 'react';
import { SecContentComponentType, SecContentRenderType } from '../types';

export const SectionContentRender: SecContentRenderType = (props, ref) => {
  const { className, cols = 1, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      ref={ref}
      className={clsx('sec-content', className)}
      data-grid-cols={cols}
    />
  );
};

export const SectionContent = React.forwardRef(SectionContentRender) as SecContentComponentType;
SectionContent.displayName = '@v2/Section.Content';
