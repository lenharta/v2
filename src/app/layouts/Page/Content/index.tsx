import * as React from 'react';

export type PageContentBaseProps = React.JSX.IntrinsicElements['main'];

export interface PageContentProps extends PageContentBaseProps {}

export const PageContent = React.forwardRef<HTMLDivElement, PageContentProps>((props, ref) => {
  const { children } = props;
  return (
    <main className="Page-content" ref={ref}>
      {children}
    </main>
  );
});

PageContent.displayName = '@v2/Page.Content';
