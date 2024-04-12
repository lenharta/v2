import { Box } from '@/core';
import { Action } from '@/app/common/action';
import { Search } from '@/app/common/search';
import { useNavigate } from 'react-router-dom';

export type LayoutHeaderComponent = React.FC<{}> & {};

export const LayoutHeader: LayoutHeaderComponent = ({}) => {
  const navigate = useNavigate();
  return (
    <header className="layout-header">
      <Box className="layout-header-left">
        <Action
          to="/"
          label="logo link"
          navigate={navigate}
          className="layout-header-logo-link"
          children="Logo Link"
          variant="link"
        />
      </Box>

      <Box className="layout-header-right">
        <Search />
        <Action
          to="/preferences"
          icon="settings"
          label="go to preferences"
          className="layout-header-action-item"
          navigate={navigate}
          variant="button"
        />
      </Box>
    </header>
  );
};

LayoutHeader.displayName = '@v2/app/Layout.Header';
