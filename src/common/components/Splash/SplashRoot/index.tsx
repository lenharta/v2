import { factory } from '@/core';
import { Factory } from '@/types';

interface SplashRootProps {}

type SplashRootFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SplashRootProps;
}>;

const SplashRoot = factory<SplashRootFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return <div {...forwardedProps} ref={ref} />;
});

SplashRoot.displayName = '@v2/Splash.Root';
export { SplashRoot };
