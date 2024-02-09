import { Factory, createFactory } from '@/factory';

export type HeaderNavProps = {};

export type HeaderNavFactory = Factory.Config<{
  component: 'nav';
  props: HeaderNavProps;
}>;

export const HeaderNav = createFactory<HeaderNavFactory>((props) => {
  const { children, component: Component = 'nav', ...otherProps } = props;
  return (
    <Component {...otherProps} className="page-header-nav">
      {children}
    </Component>
  );
});
