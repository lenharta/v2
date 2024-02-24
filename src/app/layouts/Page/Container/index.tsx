import * as React from 'react';

export type PageContainerBaseProps = React.JSX.IntrinsicElements['div'];

export interface PageContainerProps extends PageContainerBaseProps {}

export const PageContainer = React.forwardRef<HTMLDivElement, PageContainerProps>((props, ref) => {
  const { children } = props;
  return (
    <div className="Page-container" ref={ref}>
      {children}
    </div>
  );
});

PageContainer.displayName = '@v2/Page.Container';
