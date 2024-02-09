import { Factory, createFactory } from '@/factory';
import { HeaderActionBox } from './HeaderActionBox';
import { HeaderLogoBox } from './HeaderLogoBox';
import { HeaderNav } from './HeaderNav';
import { PageContainer } from '../Container';

export type PageHeaderProps = {};

export type PageHeaderFactory = Factory.Config<{
  props: PageHeaderProps;
  component: 'main';
  components: {
    ActionBox: typeof HeaderActionBox;
    LogoBox: typeof HeaderLogoBox;
    Nav: typeof HeaderNav;
  };
}>;

export const PageHeader = createFactory<PageHeaderFactory>((props) => {
  const { children, component: Component = 'header', ...otherProps } = props;
  return (
    <Component {...otherProps} className="header">
      <PageContainer>
        <PageHeader.Nav>
          <PageHeader.LogoBox />
          <PageHeader.ActionBox />
        </PageHeader.Nav>
      </PageContainer>
    </Component>
  );
});

PageHeader.displayName = 'v2/Page.Header';
PageHeader.ActionBox = HeaderActionBox;
PageHeader.LogoBox = HeaderLogoBox;
PageHeader.Nav = HeaderNav;
