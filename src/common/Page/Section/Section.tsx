import { Factory, createFactory } from '@/factory';

export type PageSectionProps = {};

export type PageSectionFactory = Factory.Config<{
  component: 'section';
  props: PageSectionProps;
}>;

export const PageSection = createFactory<PageSectionFactory>((props) => {
  const { children, component: Component = 'section', ...otherProps } = props;
  return (
    <Component {...otherProps} className="section">
      {children}
    </Component>
  );
});

PageSection.displayName = 'v2/Page.Section';
