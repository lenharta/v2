import * as React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Icon } from '@/common';
import { useThemeCTX } from '@/store';
import { type ThemeStore } from '@/types/store';
import { PageContainer } from '../Container';

export type PageHeaderBaseProps = React.JSX.IntrinsicElements['div'];

export interface PageHeaderProps extends PageHeaderBaseProps {}

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

export const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>((props, ref) => {
  const { ...otherProps } = props;
  const theme = useThemeCTX();
  return (
    <div {...otherProps} ref={ref} className="Page-header">
      <PageContainer>
        <nav className="Page-nav">
          <HeaderLogo />
          <HeaderAvatar {...theme.state} />
        </nav>
      </PageContainer>
    </div>
  );
});

PageHeader.displayName = '@v2/Page.Header';
