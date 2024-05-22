import { factory } from '@/core';
import { Factory } from '@/types';

interface SplashCellProps {}

type SplashCellFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SplashCellProps;
}>;

const SplashCell = factory<SplashCellFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return <div {...forwardedProps} ref={ref} />;
});

SplashCell.displayName = '@v2/Splash.Cell';
export { SplashCell };
