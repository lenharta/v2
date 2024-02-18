import * as React from 'react';
import type { Core } from '@/types/core';
import { Avatar, Icon } from '@/common';
import { useThemeCTX } from '@/store';
import { Link } from 'react-router-dom';
import { PageContainer } from '../Container';

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
      <PageContainer>
        <nav className="Page-nav">
          <Link to="/" children={<Icon name="shield" type="filled" />} />
          <Avatar
            to="/preferences"
            children={<Icon name={state.avatar} />}
            aria-label="go to preferences"
            // size="md"
          />
        </nav>
      </PageContainer>
    </div>
  );
});

PageHeader.displayName = '@v2/Page.Header';
