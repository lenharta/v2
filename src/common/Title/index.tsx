import clsx from 'clsx';
import * as React from 'react';
import { objectKeys } from '@/utils';
import { TitleLevel } from '@/types';
import { TitleComponentType, TitleLevelProps, TitleRenderType } from './types';

const findComponent = (levels: TitleLevelProps): TitleLevel => {
  const find = objectKeys(levels!).find((value) => levels![value] !== undefined);
  return !find ? 'h2' : find;
};

export const TitleRender: TitleRenderType = (props, ref) => {
  const { h1, h2, h3, h4, h5, h6, children, className, ...otherProps } = props;
  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });

  return (
    <Component {...otherProps} ref={ref} className={clsx('title', className)}>
      {children}
    </Component>
  );
};

export const Title = React.forwardRef(TitleRender) as TitleComponentType;
Title.displayName = '@v2/Title';
