import clsx from 'clsx';
import * as React from 'react';
import { objectKeys } from '@/utils';
import { SubtitleLevel } from '@/types';
import { SubtitleComponentType, SubtitleLevelProps, SubtitleRenderType } from './types';

const findComponent = (levels: SubtitleLevelProps): SubtitleLevel => {
  return objectKeys(levels).find((value) => levels[value] !== undefined)!;
};

const SubtitleRender: SubtitleRenderType = (props, ref) => {
  const {
    h1,
    h2 = true,
    h3,
    h4,
    h5,
    h6,
    size = 'md',
    style,
    className,
    children,
    ...otherProps
  } = props;
  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });
  return (
    <Component
      {...otherProps}
      style={{ ...style, fontSize: `var(--font-size-subtitle-${size})` }}
      className={clsx('subtitle', className)}
      ref={ref}
    >
      {children}
    </Component>
  );
};

export const Subtitle = React.forwardRef(SubtitleRender) as SubtitleComponentType;
Subtitle.displayName = '@v2/Subtitle';
