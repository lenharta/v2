import * as React from 'react';

type PageFooterElementProps = React.ComponentPropsWithoutRef<'footer'>;
type PageFooterAttributeProps = React.RefAttributes<HTMLElement>;
type PageFooterBaseProps = PageFooterElementProps & PageFooterAttributeProps;

export interface PageFooterProps extends PageFooterBaseProps {}

export const _PageFooter = (props: PageFooterProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { children, ...otherProps } = props;
  return (
    <footer {...otherProps} className="Page-footer" ref={ref}>
      {children}
    </footer>
  );
};

export type PageFooterComponent = React.ForwardRefExoticComponent<PageFooterProps>;
export const PageFooter = React.forwardRef(_PageFooter) as PageFooterComponent;
PageFooter.displayName = '@v2/Page.Footer';
