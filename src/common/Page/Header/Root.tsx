import * as React from 'react';
import { useSurface } from '@/hooks';
import type { PageHeaderComponent } from '@/types';

import { PageHeaderNav } from './Nav';
import { PageContainer } from '../Container';
import { PageHeaderLogoBox } from './LogoBox';
import { PageHeaderActionBox } from './ActionBox';

export const PageHeader: PageHeaderComponent = (props) => {
  const { ...otherProps } = props;

  const surface = React.useCallback(
    () =>
      useSurface({
        values: [
          { prop: 'backgroundColor', token: 'primary', alpha: 0.65 },
          { prop: 'color', token: 'secondary', alpha: 0.9 },
        ],
      }),
    []
  );

  return (
    <div {...otherProps} style={{ ...surface() }} className="PageHeader">
      <PageContainer>
        <PageHeader.Nav>
          <PageHeader.LogoBox />
          <PageHeader.ActionBox />
        </PageHeader.Nav>
      </PageContainer>
    </div>
  );
};

PageHeader.displayName = 'v2/Page.Header';

PageHeader.ActionBox = PageHeaderActionBox;
PageHeader.LogoBox = PageHeaderLogoBox;
PageHeader.Nav = PageHeaderNav;
