import * as React from 'react';
import { Title } from '@/common';

type PageHeroElementProps = React.ComponentPropsWithoutRef<'div'>;
type PageHeroAttributeProps = React.RefAttributes<HTMLDivElement>;
type PageHeroBaseProps = PageHeroElementProps & PageHeroAttributeProps;

export interface PageHeroProps extends PageHeroBaseProps {
  title: string;
}

export const _PageHero = (props: PageHeroProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { title, children, ...otherProps } = props;
  return (
    <div {...otherProps} className="Page-hero" ref={ref}>
      <Title h1 className="page-hero-title" children={title} />
      {children}
    </div>
  );
};

export type PageHeroComponent = React.ForwardRefExoticComponent<PageHeroProps>;
export const PageHero = React.forwardRef(_PageHero) as PageHeroComponent;
PageHero.displayName = '@v2/Page.Hero';
