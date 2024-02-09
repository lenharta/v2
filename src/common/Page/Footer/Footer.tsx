import { Factory, createFactory } from '@/factory';

export type PageFooterProps = {};

export type PageFooterFactory = Factory.Config<{
  props: PageFooterProps;
  component: 'footer';
}>;

export const PageFooter = createFactory<PageFooterFactory>((props) => {
  const { children, component: Component = 'footer', ...otherProps } = props;
  return (
    <Component {...otherProps} className="footer">
      {children}
    </Component>
  );
});

PageFooter.displayName = 'v2/Page.Footer';
