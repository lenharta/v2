import clsx from 'clsx';
import * as React from 'react';

type PageContentBaseProps = React.ComponentPropsWithoutRef<'main'>;

export interface PageContentProps extends PageContentBaseProps {}

const _PageContent = (props: PageContentProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('page-content', className);
  return (
    <main {...otherProps} className={clxss} ref={ref}>
      {children}
    </main>
  );
};

export const PageContent = React.forwardRef(_PageContent) as React.ForwardRefExoticComponent<
  PageContentProps & React.RefAttributes<HTMLElement>
>;

PageContent.displayName = '@v2/Page.Content';
