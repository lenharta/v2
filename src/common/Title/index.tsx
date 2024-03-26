import clsx from 'clsx';
import * as React from 'react';
import { objectKeys } from '@/utils';
import { TitleComponentType, TitleLevelProps, TitleRenderType } from './types';

const findComponent = (levels: TitleLevelProps) => {
  return objectKeys(levels).find((value) => levels[value] !== undefined)!;
};

export const TitleRender: TitleRenderType = (props, ref) => {
  const { h1, h2 = true, h3, h4, h5, h6, size = 'md', style, className, ...otherProps } = props;
  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });
  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clsx('title', className)}
      style={{ ...style, fontSize: `var(--font-size-title-${size})` }}
    />
  );
};

export const Title = React.forwardRef(TitleRender) as TitleComponentType;
Title.displayName = '@v2/Title';
