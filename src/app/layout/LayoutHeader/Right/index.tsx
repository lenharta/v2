import { Box } from '@/core';
import { Action } from '@/app/action';

export type LayoutHeaderRightComponent = React.FC<{
  navigate: (to: string) => void;
}>;

export const LayoutHeaderRight: LayoutHeaderRightComponent = ({ navigate }) => {
  return (
    <Box className="layout-header-right">
      <Action
        to="/"
        icon="placeholder"
        label="header action item"
        className="layout-header-action-item"
        navigate={navigate}
        variant="button"
      />
      <Action
        to="/"
        icon="placeholder"
        label="header action item"
        className="layout-header-action-item"
        navigate={navigate}
        variant="button"
      />
    </Box>
  );
};

LayoutHeaderRight.displayName = '@v2/app/LayoutHeader.Right';
