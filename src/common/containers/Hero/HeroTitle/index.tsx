import React from 'react';
import { Factory } from '@/types';
import { Title, factory } from '@/core';
import { HeroCSS, HeroTitleProps } from '../types';

const css: Partial<HeroCSS> = {
  title: 'v2-hero-title',
};

type HeroTitleFactory = Factory.Config<{
  ref: HTMLHeadingElement;
  comp: 'h1';
  omits: 'title';
  props: HeroTitleProps;
}>;

const HeroTitle = factory<HeroTitleFactory>((props, ref) => {
  const { title, ...forwardedProps } = props;

  if (typeof title === 'string') {
    return (
      <Title h1 className={css.title} ref={ref} {...forwardedProps}>
        {title}
      </Title>
    );
  }
  return <React.Fragment>{title}</React.Fragment>;
});

HeroTitle.displayName = '@v2/Hero.Title';
export { HeroTitle };
