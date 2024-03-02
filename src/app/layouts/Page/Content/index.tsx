import clsx from 'clsx';
import * as React from 'react';

type PageContentElementProps = React.ComponentPropsWithoutRef<'main'>;
type PageContentAttributeProps = React.RefAttributes<HTMLElement>;
type PageContentBaseProps = PageContentElementProps & PageContentAttributeProps;

export interface PageContentProps extends PageContentBaseProps {}

const _PageContent = (props: PageContentProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('Page-content', className);
  return (
    <main {...otherProps} className={clxss} ref={ref}>
      {children}
    </main>
  );
};

export type PageContentComponent = React.ForwardRefExoticComponent<PageContentProps>;
export const PageContent = React.forwardRef(_PageContent) as PageContentComponent;
PageContent.displayName = '@v2/Page.Content';
