import { factory } from '@/core';
import { Factory } from '@/types';

interface SplashGridProps {}

type SplashGridFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SplashGridProps;
}>;

const SplashGrid = factory<SplashGridFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return <div {...forwardedProps} ref={ref} />;
});

SplashGrid.displayName = '@v2/Splash.Grid';
export { SplashGrid };
