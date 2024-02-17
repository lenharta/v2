import * as React from 'react';
import type { Core } from '@/types/core';
import { Avatar, Icon } from '@/common';
import { useThemeCTX } from '@/store';
import { Link } from 'react-router-dom';

export type PageHeaderProps = {};

export type PageHeaderFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: PageHeaderProps;
  component: 'header';
}>;

export const PageHeader: PageHeaderFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'header', ...otherProps } = props;
  const { state } = useThemeCTX();

  return (
    <div {...otherProps} className="Page-header" ref={ref}>
      <div className="Page-container">
        <nav className="Page-nav">
          <Link to="/" className="Page-nav-logo" children="Logo" />
          <div>
            <Avatar
              to="/preferences"
              children={<Icon name={state.avatar} />}
              aria-label="go to preferences"
              className="Page-nav-avatar"
              size="md"
            />
          </div>
        </nav>
      </div>
    </div>
  );
});

PageHeader.displayName = '@v2/PageHeader';
