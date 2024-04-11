import { Box } from '@/core';
import { Action } from '@/app/action';
import { LayoutSearch } from '../../LayoutSearch';

export type LayoutHeaderRightComponent = React.FC<{
  navigate: (to: string) => void;
}>;

export const LayoutHeaderRight: LayoutHeaderRightComponent = ({ navigate }) => {
  return (
    <Box className="layout-header-right">
      <LayoutSearch />
      <Action
        to="/preferences"
        icon="settings"
        label="go to preferences"
        className="layout-header-action-item"
        navigate={navigate}
        variant="button"
      />
    </Box>
  );
};

LayoutHeaderRight.displayName = '@v2/app/LayoutHeader.Right';
