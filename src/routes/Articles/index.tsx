import { Page } from '@/app';
import { ArticlesHero } from './ArticlesHero';
import { ArticlesIntro } from './ArticlesIntro';

type ArticlesFactory = React.FC<{}> & {
  Hero: typeof ArticlesHero;
  Intro: typeof ArticlesIntro;
};

const Articles: ArticlesFactory = ({}) => (
  <Page>
    <Articles.Hero />
    <Articles.Intro />
  </Page>
);

Articles.Hero = ArticlesHero;
Articles.Intro = ArticlesIntro;
Articles.displayName = '@v2/Articles.Route';
export { Articles };
