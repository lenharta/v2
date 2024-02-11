import * as React from 'react';
import { createSurface } from '@/common/utils';
import type { PageHeaderComponent } from '@/types';

import { PageHeaderNav } from './Nav';
import { PageContainer } from '../Container';
import { PageHeaderLogoBox } from './LogoBox';
import { PageHeaderActionBox } from './ActionBox';

export const PageHeader: PageHeaderComponent = (props) => {
  const { ...otherProps } = props;

  const surface = React.useCallback(
    () =>
      createSurface({
        scheme: 'primary',
        values: [
          { type: 'backgroundColor', alpha: 0.65, scheme: 'secondary' },
          { type: 'borderColor', alpha: 0.3 },
          { type: 'color', alpha: 1 },
        ],
      }),
    []
  );

  return (
    <div {...otherProps} className="PageHeader" style={{ ...surface }}>
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
