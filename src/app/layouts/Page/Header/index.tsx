import * as React from 'react';

type PageHeaderBaseProps = React.ComponentPropsWithoutRef<'header'>;

export interface PageHeaderProps extends PageHeaderBaseProps {}

const _PageHeader = (props: PageHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <header {...otherProps} ref={ref} className="page-header">
      Header
    </header>
  );
};

export const PageHeader = React.forwardRef(_PageHeader) as React.ForwardRefExoticComponent<
  PageHeaderProps & React.RefAttributes<HTMLElement>
>;

PageHeader.displayName = '@v2/Page.Header';
