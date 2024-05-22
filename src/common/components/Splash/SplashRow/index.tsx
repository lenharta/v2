import { factory } from '@/core';
import { Factory } from '@/types';

interface SplashRowProps {}

type SplashRowFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SplashRowProps;
}>;

const SplashRow = factory<SplashRowFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return <div {...forwardedProps} ref={ref} />;
});

SplashRow.displayName = '@v2/Splash.Row';
export { SplashRow };
