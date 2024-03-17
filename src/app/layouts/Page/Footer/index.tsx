import clsx from 'clsx';
import * as React from 'react';

type PageFooterBaseProps = React.ComponentPropsWithoutRef<'footer'>;

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

export const PageFooter = React.forwardRef(_PageFooter) as React.ForwardRefExoticComponent<
  PageFooterProps & React.RefAttributes<HTMLElement>
>;

PageFooter.displayName = '@v2/Page.Footer';
