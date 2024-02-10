import * as React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@/common';
import { useThemeCTX } from '@/store';
import { createSurfaceAccent } from '@/common/utils';
import type { PageHeaderComponent } from '@/types';

export const PageHeader: PageHeaderComponent = (props) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} className="header">
      <PageHeader.Nav>
        <PageHeader.LogoBox />
        <PageHeader.ActionBox />
      </PageHeader.Nav>
    </div>
  );
};

PageHeader.displayName = 'v2/Page.Header';

const PageHeaderActionBox: PageHeaderComponent['ActionBox'] = React.forwardRef((props, ref) => {
  const { ...otherProps } = props;
  const [hovered, setHovered] = React.useState(false);
  const { state } = useThemeCTX();

  return (
    <div {...otherProps} ref={ref}>
      <Link
        to="/preferences"
        className="avatar"
        aria-label="g"
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        children={<Icon name={state.avatar} />}
        style={createSurfaceAccent({ accent: state.accent, hovered })}
      />
    </div>
  );
});

PageHeader.ActionBox = PageHeaderActionBox;

const PageHeaderLogoBox: PageHeaderComponent['LogoBox'] = React.forwardRef((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="HeaderLogoBox">
      <Link to="/" className="HeaderLogoBox-link">
        Logo
      </Link>
    </div>
  );
});

PageHeader.LogoBox = PageHeaderLogoBox;

const PageHeaderNav: PageHeaderComponent['Nav'] = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="HeaderNav">
      {children}
    </div>
  );
});

PageHeader.Nav = PageHeaderNav;
