import { Factory, createFactory } from '@/factory';

export type PageContentProps = {};

export type PageContentFactory = Factory.Config<{
  props: PageContentProps;
  component: 'main';
}>;

export const PageContent = createFactory<PageContentFactory>((props) => {
  const { id, children, component: Component = 'main', ...otherProps } = props;
  const contentId = 'main_content' || id;
  return (
    <Component {...otherProps} id={contentId} className="content">
      {children}
    </Component>
  );
});

PageContent.displayName = 'v2/Page.Content';
