import * as React from 'react';
import { mergeProps } from '@/utils';
import { createBlurToken, createIndexToken, createRadiusToken } from '../utils';
import type { IndexLevel, Size } from '@/types/common';

export type OverlayBaseProps = React.JSX.IntrinsicElements['div'];

export interface OverlayProps extends OverlayBaseProps {
  bgColor?: React.CSSProperties['color'];
  opacity?: number;
  zIndex?: IndexLevel;
  center?: boolean;
  radius?: Size | number;
  fixed?: boolean;
  blur?: number;
}

const defaultProps: Partial<OverlayProps> = {
  opacity: 0.6,
  bgColor: 'rgba(0, 0, 0, 0.2)',
  zIndex: 'modal',
  radius: 0,
  blur: 16,
};

export const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
  const {
    opacity,
    bgColor,
    zIndex,
    radius,
    blur,
    fixed,
    center,
    style,
    children,
    className,
    ...otherProps
  } = props;

  const mergedProps = mergeProps(
    { opacity, bgColor, zIndex, radius, blur, fixed, center },
    defaultProps
  );

  const otherStyles = {
    zIndex: createIndexToken(mergedProps.zIndex),
    borderRadius: createRadiusToken(mergedProps.radius),
    backdropFilter: createBlurToken(mergedProps.blur),
    backgroundColor: mergedProps.bgColor,
  };

  return (
    <div
      {...otherProps}
      ref={ref}
      className="Overlay"
      data-fixed={mergedProps.fixed}
      data-center={mergedProps.center}
      style={{ ...style, ...otherStyles }}
      children={children}
    />
  );
});
