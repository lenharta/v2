import * as React from 'react';
import { useMergeRefs } from '@/hooks';
import { useFloatingContext } from '../context';

type FloatingBoxBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface BoxProps extends FloatingBoxBaseProps {}

function _FloatingBox(props: BoxProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { ...otherProps } = props;

  const ctx = useFloatingContext();
  const refs = useMergeRefs(ref, ctx.floating);

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
      className="floating"
      style={{
        zIndex: ctx.zIndex,
        visibility: !ctx.opened ? 'hidden' : 'visible',
        width: ctx.width === 'target' ? undefined : (ctx.width as string),
        top: ctx.y ?? 0,
        left: ctx.x ?? 0,
      }}
    />
  );
}

export const FloatingBox = React.forwardRef(_FloatingBox) as React.ForwardRefExoticComponent<
  BoxProps & React.RefAttributes<HTMLDivElement>
>;

FloatingBox.displayName = '@v2/Floating.Box';
