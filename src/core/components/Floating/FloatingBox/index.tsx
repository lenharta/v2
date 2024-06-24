import clsx from 'clsx';
import { Transition } from '@/core';
import { useMergeRefs } from '@/hooks';
import { Core, Factory } from '@/types';
import { createFactory } from '@/factory';
import { FloatingBoxProps } from '../Floating.types';
import { useFloatingContext } from '../Floating.context';

type FloatingBoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: FloatingBoxProps;
}>;

const FloatingBox = createFactory<FloatingBoxFactory>((props, ref) => {
  const { className, style, children, ...forwardedProps } = props;

  const ctx = useFloatingContext();
  const refs = useMergeRefs(ref, ctx.floating);

  if (ctx.disabled) return null;

  const contextProps = ctx
    ? {
        id: ctx.getBoxId(),
        'aria-labelledby': ctx.getBoxId(),
      }
    : {};

  const contextStyles = ctx
    ? {
        top: ctx.y ?? 0,
        left: ctx.x ?? 0,
        width: ctx.width === 'target' ? undefined : (ctx.width as Core.CSS['width']),
        zIndex: ctx.zIndex,
      }
    : {};

  return (
    <Transition {...ctx.transitionProps} mounted={ctx.isOpen}>
      {(transitionStyles) => (
        <div
          ref={refs}
          role="dialog"
          tabIndex={-1}
          style={{
            ...style,
            ...contextStyles,
            ...transitionStyles,
            position: 'absolute',
            boxSizing: 'border-box',
            padding: 0,
            margin: 0,
          }}
          {...forwardedProps}
          {...contextProps}
        >
          {children}
        </div>
      )}
    </Transition>
  );
});

FloatingBox.displayName = '@v2/Floating.Box';
export { FloatingBox, type FloatingBoxProps };
