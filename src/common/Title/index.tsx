import * as React from 'react';
import { objectKeys } from '@/utils';
import { TitleLevel } from '@/types';
import { useThemeClxss } from '../utils';
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
    fz = 8,
    fw = 1,
    px,
    py,
    mx,
    my,
    children,
    className,
    ...otherProps
  } = props;

  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });
  const clxss = useThemeClxss({ clxss: 'title', className, fz, fw, px, py, mx, my });

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
};

export const Title = React.forwardRef(TitleRender) as TitleComponentType;
Title.displayName = '@v2/Title';
