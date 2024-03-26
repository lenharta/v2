import clsx from 'clsx';
import * as React from 'react';
import { Title, Subtitle } from '@/common';
import { PageHeroComponentType, PageHeroRenderType } from '../types';

export const PageHeroRender: PageHeroRenderType = (props, ref) => {
  const { title, subtitle, variant = 'default', className, children, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      ref={ref}
      role="banner"
      className={clsx('page-hero', className)}
      data-variant={variant}
    >
      <div className="inner">
        {subtitle && <Subtitle h2>{subtitle}</Subtitle>}
        {title && <Title h1>{title}</Title>}
        {children}
      </div>
    </div>
  );
};

export const PageHero = React.forwardRef(PageHeroRender) as PageHeroComponentType;
PageHero.displayName = '@v2/Page.Hero';
