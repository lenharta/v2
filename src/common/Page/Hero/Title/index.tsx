import * as React from 'react';
import { Title } from '@/common';
import { PageHeroComponents } from '@/types';

export const PageHeroTitle: PageHeroComponents['Title'] = React.forwardRef((props, ref) => {
  const { title, ...otherProps } = props;
  if (!title) return null;

  return (
    <Title {...otherProps} ref={ref} className="PageHeroTitle" component="h1">
      {title}
    </Title>
  );
});

PageHeroTitle.displayName = 'v2/Page.PageHero.Title';
