import clsx from 'clsx';
import { Box } from '@/core/components/Box';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

interface FloatingBoxProps {}

type FloatingBoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: FloatingBoxProps;
}>;

const FloatingBox = factory<FloatingBoxFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={clsx('v2-floating-box', className)}>
      <span>Floating Box</span>
    </Box>
  );
});

FloatingBox.displayName = '@v2/Floating.Box';
export { FloatingBox };
