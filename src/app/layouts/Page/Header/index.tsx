import * as React from 'react';
import { Link } from 'react-router-dom';
import { useThemeCTX } from '@/store';
import { Avatar, Icon } from '@/common';
import { ThemeStore } from '@/types/store';

const HeaderLogo = () => {
  return (
    <Link to="/">
      <Icon name="shield" type="filled" />
    </Link>
  );
};

const HeaderAvatar = (state: ThemeStore) => (
  <Avatar
    to="/preferences"
    aria-label="go to preferences"
    children={<Icon name={state.avatar} />}
  />
);

type PageHeaderElementProps = React.ComponentPropsWithoutRef<'header'>;
type PageHeaderAttributeProps = React.RefAttributes<HTMLElement>;
type PageHeaderBaseProps = PageHeaderElementProps & PageHeaderAttributeProps;

export interface PageHeaderProps extends PageHeaderBaseProps {}

export const _PageHeader = (props: PageHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { children, ...otherProps } = props;
  const theme = useThemeCTX();
  return (
    <header {...otherProps} className="Page-header" ref={ref}>
      <nav className="Page-nav">
        <HeaderLogo />
        <HeaderAvatar {...theme.state} />
      </nav>
    </header>
  );
};

export type PageHeaderComponent = React.ForwardRefExoticComponent<PageHeaderProps>;
export const PageHeader = React.forwardRef(_PageHeader) as PageHeaderComponent;
PageHeader.displayName = '@v2/Page.Header';
