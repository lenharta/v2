import React from 'react';
import { Title } from '@/core';
import { css } from '../hero-constants';
import { HeroTitleProps } from '../hero-types';

type HeroTitleFactory = React.FC<HeroTitleProps>;

const HeroTitle: HeroTitleFactory = (props) => {
  const { title, ...forwardedProps } = props;

  return typeof title === 'string' ? (
    <Title h1 className={css.title} {...forwardedProps}>
      {title}
    </Title>
  ) : (
    <React.Fragment>{title}</React.Fragment>
  );
};

HeroTitle.displayName = '@v2/Hero.Title';
export { HeroTitle };
