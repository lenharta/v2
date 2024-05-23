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

  const boxWidth = ctx.width === 'target' ? undefined : (ctx.width as React.CSSProperties['width']);
  const boxStyles = { top: ctx.y ?? 0, left: ctx.x ?? 0, width: boxWidth };

  return (
    <Transition {...ctx.transitionProps} mounted={ctx.isOpen}>
      {(transitionStyles) => (
        <Box
          {...forwardedProps}
          id={ctx.getBoxId()}
          role="dialog"
          style={{ ...style, ...boxStyles, ...transitionStyles }}
          className={clsx('v2-floating-box', className)}
          aria-labelledby={ctx.getBoxId()}
          tabIndex={-1}
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
