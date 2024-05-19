import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useMergeRefs } from '@/hooks';
import { Box, Transition } from '@/core/components';
import { useFloatingContext } from '../context';

interface FloatingBoxProps {
  style?: React.CSSProperties | undefined;
}

type FloatingBoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: FloatingBoxProps;
}>;

const FloatingBox = factory<FloatingBoxFactory>((props, ref) => {
  const { className, style, ...forwardedProps } = props;

  const ctx = useFloatingContext();
  const refs = useMergeRefs(ref, ctx.refs.floating);

  return (
    <Transition {...ctx.transitionProps} mounted={ctx.isOpen}>
      {(transitionStyles) => (
        <Box
          {...forwardedProps}
          className={clsx('v2-floating-box', className)}
          style={{ ...style, ...transitionStyles, ...ctx.floatingStyles }}
          ref={refs}
        >
          <span>Floating Box</span>
        </Box>
      )}
    </Transition>
  );
});

FloatingBox.displayName = '@v2/Floating.Box';
export { FloatingBox, type FloatingBoxProps };
