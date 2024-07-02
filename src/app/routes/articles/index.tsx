import * as React from 'react';
import { Page } from '@/app';
import { ArticlesHero } from './ArticlesHero';

type ArticlesFactory = React.FC<{}> & {
  Hero: typeof ArticlesHero;
};

const Articles: ArticlesFactory = ({}) => (
  <Page>
    <Articles.Hero />
  </Page>
);

Articles.Hero = ArticlesHero;
Articles.displayName = '@v2/Articles.Route';
export { Articles };
