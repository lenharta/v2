import * as React from 'react';
import { objectKeys } from '@/utils';
import { SubtitleLevel } from '@/types';
import { useThemeClxss } from '../utils';
import { SubtitleComponentType, SubtitleLevelProps, SubtitleRenderType } from './types';

const findComponent = (levels?: SubtitleLevelProps): SubtitleLevel => {
  const find = objectKeys(levels!).find((value) => levels![value] !== undefined);
  return !find ? 'h2' : find;
};

const SubtitleRender: SubtitleRenderType = (props, ref) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    fz = 6,
    fw = 3,
    px,
    py,
    mx,
    my,
    children,
    className,
    ...otherProps
  } = props;

  const Component = findComponent({ h1, h2, h3, h4, h5, h6 });
  const clxss = useThemeClxss({ clxss: 'subtitle', className, fz, fw, px, py, mx, my });

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
};

export const Subtitle = React.forwardRef(SubtitleRender) as SubtitleComponentType;
Subtitle.displayName = '@v2/Subtitle';
