import { Factory, createFactory } from '@/factory';

export type PageContainerProps = {};

export type PageContainerFactory = Factory.Config<{
  props: PageContainerProps;
  component: 'div';
}>;

export const PageContainer = createFactory<PageContainerFactory>((props) => {
  const { children, component: Component = 'div', ...otherProps } = props;
  return (
    <Component {...otherProps} className="container">
      {children}
    </Component>
  );
});

PageContainer.displayName = 'v2/Page.Container';
