import { mergeRefs } from '@/hooks';
import { useFloatingCTX } from '../context';
import React from 'react';

type FloatingBoxElementProps = React.ComponentPropsWithoutRef<'div'>;
type FloatingBoxRefProps = React.RefAttributes<HTMLDivElement>;
type FloatingBoxBaseProps = FloatingBoxElementProps & FloatingBoxRefProps;

export interface BoxProps extends FloatingBoxBaseProps {}

function _FloatingBox(props: BoxProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { ...otherProps } = props;

  const ctx = useFloatingCTX();
  const refs = mergeRefs(ref, ctx.floating);

  if (ctx.disabled) return null;

  return (
    <div
      {...otherProps}
      id={ctx.getBoxId()}
      ref={refs}
      role="dialog"
      tabIndex={-1}
      data-position={ctx.position}
      aria-labelledby={ctx.getTargetId()}
    />
  );
}

export type FloatingBoxComponent = React.ForwardRefExoticComponent<BoxProps>;
export const FloatingBox = React.forwardRef(_FloatingBox) as FloatingBoxComponent;
