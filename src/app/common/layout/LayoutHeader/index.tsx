import { Box } from '@/core';
import { Search } from '@/app/common/search';
import { LayoutLogo } from '../LayoutLogo';

export type LayoutHeaderComponent = React.FC<{}> & {};

export const LayoutHeader: LayoutHeaderComponent = ({}) => (
  <header className="layout-header">
    <LayoutLogo />
    <Box className="layout-header-right">
      <Search />
    </Box>
  </header>
);

LayoutHeader.displayName = '@v2/app/Layout.Header';
