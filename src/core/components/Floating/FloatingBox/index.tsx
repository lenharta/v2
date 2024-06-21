import clsx from 'clsx';
import { factory } from '../../../factory';
import { Transition } from '@/core';
import { useMergeRefs } from '@/hooks';
import { Core, Factory } from '@/types';
import { FloatingBoxProps } from '../Floating.types';
import { useFloatingContext } from '../Floating.context';

type FloatingBoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: FloatingBoxProps;
}>;

const FloatingBox = factory<FloatingBoxFactory>((props, ref) => {
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
          className={clsx('v2-floating-box', className)}
          style={{ ...style, ...contextStyles, ...transitionStyles }}
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
