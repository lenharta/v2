import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import clsx from 'clsx';

export interface ScreenHeroProps extends Core.BaseProps {}

export type ScreenHeroFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: ScreenHeroProps;
}>;

export const ScreenHero = factory<ScreenHeroFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <section
      {...otherProps}
      className={clsx('screen-hero', className)}
      role="presentation"
      ref={ref}
    >
      {children}
    </section>
  );
});

ScreenHero.displayName = '@v2/site/Screen.Hero';
