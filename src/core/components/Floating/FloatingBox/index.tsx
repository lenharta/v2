import clsx from 'clsx';
import { useMergeRefs } from '@/hooks';
import { Core, Factory } from '@/types';
import { FloatingBoxProps } from '../types';
import { useFloatingContext } from '../Floating.context';
import { factory, Box, Transition } from '@/core';

const css = {
  box: 'v2-floating-box',
};

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
        <Box
          {...forwardedProps}
          {...contextProps}
          style={{ ...style, ...contextStyles, ...transitionStyles }}
          className={clsx(css.box, className)}
          tabIndex={-1}
          role="dialog"
          ref={refs}
        >
          {children}
        </Box>
      )}
    </Transition>
  );
});

FloatingBox.displayName = '@v2/Floating.Box';
export { FloatingBox, type FloatingBoxProps };
