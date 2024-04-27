import { Box, Title } from '@/core';
import clsx from 'clsx';
import * as React from 'react';

export type PageHeroComponent = React.FC<{
  title?: string | undefined;
  variant?: 'default' | undefined;
}>;

export const PageHero: PageHeroComponent = (props) => {
  const { variant = 'default', title } = props;
  return (
    <section className={clsx('page-hero', `page-hero--${variant}`)} role="presentation">
      <Box>{title && <Title h1>{title}</Title>}</Box>
    </section>
  );
};

PageHero.displayName = '@v2/app/Page.Hero';
