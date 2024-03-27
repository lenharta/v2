import * as React from 'react';
import { useThemeClxss } from '../utils';
import { BoxComponentType, BoxRenderType } from './types';

const BoxRender: BoxRenderType = (props, ref) => {
  const { px, py, mx, my, cols, gap, className, children, ...otherProps } = props;
  const clxss = useThemeClxss({ clxss: 'box', className, px, py, mx, my, cols, gap });
  return (
    <div {...otherProps} className={clxss} ref={ref}>
      {children}
    </div>
  );
};

export const Box = React.forwardRef(BoxRender) as BoxComponentType;
Box.displayName = '@v2/Box';
