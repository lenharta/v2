import * as React from 'react';
import { mergeProps } from '@/utils';
import { useMergeRefs } from '@/hooks';
import { usePopoverCTX } from '../context';

type PopoverFloatingElementProps = React.ComponentPropsWithoutRef<'div'>;
type PopoverFloatingRefProps = React.RefAttributes<HTMLDivElement>;
type PopoverFloatingBaseProps = PopoverFloatingElementProps & PopoverFloatingRefProps;

export interface PopoverFloatingProps extends PopoverFloatingBaseProps {}

const defaultProps: Partial<PopoverFloatingProps> = {};

function _PopoverFloating(props: PopoverFloatingProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { ...otherProps } = props;

  const ctx = usePopoverCTX();
  const refs = useMergeRefs(ref, ctx.floatingRef);
  const _props = mergeProps({}, defaultProps);

  return (
    <div
      {...otherProps}
      ref={refs}
      style={{ left: `${ctx.x}px`, top: `${ctx.y}px` }}
      className="popover-floating"
    />
  );
}

export type PopoverFloatingComponent = React.ForwardRefExoticComponent<PopoverFloatingProps>;
export const PopoverFloating = React.forwardRef(_PopoverFloating) as PopoverFloatingComponent;
