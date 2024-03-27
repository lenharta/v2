import * as React from 'react';
import { TextComponentType, TextRenderType } from './types';
import { useThemeClxss } from '../utils';

export const TextRender: TextRenderType = (props, ref) => {
  const { fz = 4, fw = 1, px, py, mx, my, className, ...otherProps } = props;
  const clxss = useThemeClxss({ clxss: 'text', className, fz, fw, px, py, mx, my });
  return <p {...otherProps} ref={ref} className={clxss} />;
};

export const Text = React.forwardRef(TextRender) as TextComponentType;
Text.displayName = '@v2/Text';
