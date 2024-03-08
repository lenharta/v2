import { UnstyledButton } from '@/common/Button/Unstyled';
import * as React from 'react';

type PageMenuElementProps = React.ComponentPropsWithoutRef<'div'>;
type PageMenuRefProps = React.RefAttributes<HTMLDivElement>;
type PageMenuBaseProps = PageMenuElementProps & PageMenuRefProps;

export interface PageMenuProps extends PageMenuBaseProps {}

const _PageMenu = (props: PageMenuProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="page-menu">
      <div className="page-menu-nav">
        <UnstyledButton className="page-menu-nav-item" children="Item #1" />
        <UnstyledButton className="page-menu-nav-item" children="Item #2" />
        <UnstyledButton className="page-menu-nav-item" children="Item #3" />
        <UnstyledButton className="page-menu-nav-item" children="Item #4" />
        <UnstyledButton className="page-menu-nav-item" children="Item #5" />
      </div>
    </div>
  );
};

export type PageMenuComponent = React.ForwardRefExoticComponent<PageMenuProps>;
export const PageMenu = React.forwardRef(_PageMenu) as PageMenuComponent;
PageMenu.displayName = '@v2/Page.Menu';
