import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface PageHeroProps extends Core.BaseProps {}

export type PageHeroFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: PageHeroProps;
}>;

export const PageHero = factory<PageHeroFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <section {...otherProps} className={clsx('page-hero', className)} role="presentation" ref={ref}>
      {children}
    </section>
  );
});

PageHero.displayName = '@v2/site/Page.Hero';
