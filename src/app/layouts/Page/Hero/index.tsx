import clsx from 'clsx';
import * as React from 'react';

type PageHeroBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface PageHeroProps extends PageHeroBaseProps {
  title?: string;
}

export const _PageHero = (props: PageHeroProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { title, className, children, ...otherProps } = props;
  const clxss = clsx('page-hero', className);
  return (
    <div {...otherProps} className={clxss} ref={ref}>
      {children}
    </div>
  );
};

export const PageHero = React.forwardRef(_PageHero) as React.ForwardRefExoticComponent<
  PageHeroProps & React.RefAttributes<HTMLDivElement>
>;

PageHero.displayName = '@v2/Page.Hero';
