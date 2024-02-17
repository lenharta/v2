import * as React from 'react';
import type { Core } from '@/types/core';
import { Title } from '@/common';

export type PageHeroProps = {
  title?: string;
};

export type PageHeroFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: PageHeroProps;
  component: 'div';
}>;

export const PageHero: PageHeroFactory = React.forwardRef((props, ref) => {
  const { title, children, component: Component = 'div', ...otherProps } = props;
  return (
    <Component {...otherProps} className="Page-hero" ref={ref}>
      <div className="Page-container">
        {title && <Title className="Page-hero-title">{title}</Title>}
        {children}
      </div>
    </Component>
  );
});

PageHero.displayName = '@v2/PageHero';
