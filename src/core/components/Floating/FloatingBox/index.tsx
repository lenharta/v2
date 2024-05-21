import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useMergeRefs } from '@/hooks';
import { Box, Transition } from '@/core/components';
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

  if (ctx.disabled) {
    return null;
  }

  return (
    <Transition {...ctx.transitionProps} mounted={ctx.isOpen}>
      {(transitionStyles) => (
        <Box
          {...forwardedProps}
          className={clsx('v2-floating-box', className)}
          style={{
            ...style,
            ...transitionStyles,
            top: ctx.y ?? 0,
            left: ctx.x ?? 0,
            width: ctx.width === 'target' ? undefined : (ctx.width as React.CSSProperties['width']),
          }}
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
