import * as React from 'react';
import { Title } from '@/common';
import { PageHeroComponents } from '@/types';

export const PageHeroTitle: PageHeroComponents['Title'] = React.forwardRef((props, ref) => {
  const { title, ...otherProps } = props;
  if (!title) return null;

  return (
    <Title {...otherProps} ref={ref} className="PageHero-title">
      {title}
    </Title>
  );
});

PageHeroTitle.displayName = 'v2/Page.PageHero.Title';
