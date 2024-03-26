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
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    size = 'sm',
    weight = '2',
    scheme = 'primary',
    variant = 'default',
    emphasis = 'medium',
    className,
    ...otherProps
  } = props;

  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clsx('title', className)}
      data-title-size={size}
      data-title-scheme={scheme}
      data-title-weight={weight}
      data-title-variant={variant}
      data-title-emphasis={emphasis}
    />
  );
};

export const Title = React.forwardRef(TitleRender) as TitleComponentType;
Title.displayName = '@v2/Title';
