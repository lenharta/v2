import type { PageHeaderComponent } from '@/types';

import { PageHeaderNav } from './Nav';
import { PageContainer } from '../Container';
import { PageHeaderLogoBox } from './LogoBox';
import { PageHeaderActionBox } from './ActionBox';

export const PageHeader: PageHeaderComponent = (props) => {
  const { ...otherProps } = props;

  return (
    <div {...otherProps} className="PageHeader">
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
