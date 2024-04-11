import { Action } from '@/app/action';
import { Box } from '@/core';

export type LayoutHeaderLeftComponent = React.FC<{
  navigate: (to: string) => void;
}>;

export const LayoutHeaderLeft: LayoutHeaderLeftComponent = ({ navigate }) => {
  return (
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
  );
};

LayoutHeaderLeft.displayName = '@v2/app/LayoutHeader.Left';
