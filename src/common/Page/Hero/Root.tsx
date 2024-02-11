import { PageHeroTitle } from './Title';
import { PageContainer } from '../Container';
import { PageHeroRootComponent } from '@/types';

export const PageHero: PageHeroRootComponent = (props) => {
  const { title, ...otherProps } = props;
  return (
    <div {...otherProps} className="PageHero">
      <PageContainer>
        <PageHero.Title title={title} />
      </PageContainer>
    </div>
  );
};

PageHero.displayName = 'v2/Page.PageHero';

PageHero.Title = PageHeroTitle;
