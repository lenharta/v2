import { Factory, createFactory } from '@/factory';
import { Link } from 'react-router-dom';
import { PageContainer } from '../Container';

export type PageFooterProps = {};

export type PageFooterFactory = Factory.Config<{
  props: PageFooterProps;
  component: 'footer';
}>;

export const PageFooter = createFactory<PageFooterFactory>((props) => {
  const { children, component: Component = 'footer', ...otherProps } = props;
  return (
    <Component {...otherProps} className="footer">
      <PageContainer>
        <Link to="/">Home</Link>
        <Link to="/toolbox">Toolbox</Link>
        <Link to="/settings">Settings</Link>
      </PageContainer>
    </Component>
  );
});

PageFooter.displayName = 'v2/Page.Footer';
