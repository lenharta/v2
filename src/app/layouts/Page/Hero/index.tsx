import * as React from 'react';
import { Title } from '@/common';
import clsx from 'clsx';

type PageHeroElementProps = React.ComponentPropsWithoutRef<'div'>;
type PageHeroAttributeProps = React.RefAttributes<HTMLDivElement>;
type PageHeroBaseProps = PageHeroElementProps & PageHeroAttributeProps;

export interface PageHeroProps extends PageHeroBaseProps {
  title: string;
}

export const _PageHero = (props: PageHeroProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { title, className, children, ...otherProps } = props;
  const clxss = clsx('Page-hero', className);
  return (
    <div {...otherProps} className={clxss} ref={ref}>
      <Title h1 className="page-hero-title" children={title} />
      {children}
    </div>
  );
};

export type PageHeroComponent = React.ForwardRefExoticComponent<PageHeroProps>;
export const PageHero = React.forwardRef(_PageHero) as PageHeroComponent;
PageHero.displayName = '@v2/Page.Hero';
