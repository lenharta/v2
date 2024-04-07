import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { ScreenContent } from './Content';
import { ScreenHero } from './Hero';

export interface ScreenProps extends Core.BaseProps {}

export type ScreenFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ScreenProps;
  comps: {
    Hero: typeof ScreenHero;
    Content: typeof ScreenContent;
  };
}>;

export const Screen = factory<ScreenFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <div {...otherProps} className={clsx('screen-layout', className)} ref={ref}>
      {children}
    </div>
  );
});

Screen.displayName = '@v2/site/Screen';
Screen.Hero = ScreenHero;
Screen.Content = ScreenContent;
