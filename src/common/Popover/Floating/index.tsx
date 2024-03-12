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
  const refs = useMergeRefs(ctx.floatingRef, ref);
  const _props = mergeProps({}, defaultProps);
  const visibility = ctx.isOpen ? 'visible' : 'hidden';

  return (
    <div
      {...otherProps}
      ref={refs}
      style={{ top: `${ctx.y}px`, left: `${ctx.x}px`, visibility }}
      className="popover-floating"
    />
  );
}

export type PopoverFloatingComponent = React.ForwardRefExoticComponent<PopoverFloatingProps>;
export const PopoverFloating = React.forwardRef(_PopoverFloating) as PopoverFloatingComponent;
