import clsx from 'clsx';
import * as React from 'react';

type PageFooterElementProps = React.ComponentPropsWithoutRef<'footer'>;
type PageFooterAttributeProps = React.RefAttributes<HTMLElement>;
type PageFooterBaseProps = PageFooterElementProps & PageFooterAttributeProps;

export interface PageFooterProps extends PageFooterBaseProps {}

const _PageFooter = (props: PageFooterProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('page-footer', className);
  return (
    <footer {...otherProps} className={clxss} ref={ref}>
      {children}
    </footer>
  );
};

export type PageFooterComponent = React.ForwardRefExoticComponent<PageFooterProps>;
export const PageFooter = React.forwardRef(_PageFooter) as PageFooterComponent;
PageFooter.displayName = '@v2/Page.Footer';
