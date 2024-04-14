import { Search } from '@/app/common/search';
import { LayoutLogo } from '../LayoutLogo';

export type LayoutHeaderComponent = React.FC<{}> & {
  Logo: typeof LayoutLogo;
  Search: typeof Search;
};

export const LayoutHeader: LayoutHeaderComponent = ({}) => (
  <header className="layout-header">
    <LayoutHeader.Logo />
    <LayoutHeader.Search />
  </header>
);

LayoutHeader.displayName = '@v2/app/Layout.Header';
LayoutHeader.Search = Search;
LayoutHeader.Logo = LayoutLogo;
