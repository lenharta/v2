import * as React from 'react';

type PageContentElementProps = React.ComponentPropsWithoutRef<'main'>;
type PageContentAttributeProps = React.RefAttributes<HTMLElement>;
type PageContentBaseProps = PageContentElementProps & PageContentAttributeProps;

export interface PageContentProps extends PageContentBaseProps {}

export const _PageContent = (props: PageContentProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { children, ...otherProps } = props;
  return (
    <main {...otherProps} className="Page-content" ref={ref}>
      {children}
    </main>
  );
};

export type PageContentComponent = React.ForwardRefExoticComponent<PageContentProps>;
export const PageContent = React.forwardRef(_PageContent) as PageContentComponent;
PageContent.displayName = '@v2/Page.Content';
