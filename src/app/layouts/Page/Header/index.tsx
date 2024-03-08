import * as React from 'react';

type PageHeaderElementProps = React.ComponentPropsWithoutRef<'header'>;
type PageHeaderAttributeProps = React.RefAttributes<HTMLElement>;
type PageHeaderBaseProps = PageHeaderElementProps & PageHeaderAttributeProps;

export interface PageHeaderProps extends PageHeaderBaseProps {}

const _PageHeader = (props: PageHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <header {...otherProps} ref={ref} className="page-header">
      <nav className="page-header-nav">
        <button className="page-header-nav-item">Item</button>
        <button className="page-header-nav-item">Item</button>
        <button className="page-header-nav-item">Item</button>
      </nav>
    </header>
  );
};

export type PageHeaderComponent = React.ForwardRefExoticComponent<PageHeaderProps>;
export const PageHeader = React.forwardRef(_PageHeader) as PageHeaderComponent;
PageHeader.displayName = '@v2/Page.Header';
