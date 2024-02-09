import { Link } from 'react-router-dom';
import { Factory, createFactory } from '@/factory';

export type HeaderLogoBoxProps = {};

export type HeaderLogoBoxFactory = Factory.Config<{
  props: HeaderLogoBoxProps;
  component: 'div';
}>;

export const HeaderLogoBox = createFactory<HeaderLogoBoxFactory>((props) => {
  const { component: Component = 'div', ...otherProps } = props;
  return (
    <Component {...otherProps} className="page-header-logo-box">
      <Link to="/" className="page-header-logo-link">
        Logo
      </Link>
    </Component>
  );
});
