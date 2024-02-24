import * as React from 'react';
import { PageContainer } from '../Container';

export type PageFooterBaseProps = React.JSX.IntrinsicElements['footer'];

export interface PageFooterProps extends PageFooterBaseProps {}

export const PageFooter = React.forwardRef<HTMLDivElement, PageFooterProps>((props, ref) => {
  const { children } = props;
  return (
    <footer className="Page-footer" ref={ref}>
      <PageContainer>{children}</PageContainer>
    </footer>
  );
});

PageFooter.displayName = '@v2/Page.Footer';
