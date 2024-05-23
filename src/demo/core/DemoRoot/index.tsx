import { factory } from '@/core';
import { Factory } from '@/types';

interface DemoRootProps {}

type DemoRootFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DemoRootProps;
}>;

const DemoRoot = factory<DemoRootFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return <div {...forwardedProps} ref={ref} />;
});

DemoRoot.displayName = '@v2/Demo.Root';
export { DemoRoot, type DemoRootProps };
