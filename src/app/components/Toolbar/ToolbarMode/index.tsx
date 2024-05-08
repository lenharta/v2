import React from 'react';

interface ToolbarModeProps {
  children?: React.ReactNode | undefined;
}

type ToolbarModeComponent = React.FC<ToolbarModeProps>;

export const ToolbarMode: ToolbarModeComponent = (props) => {
  return (
    <div className="v2-toolbar-mode">
      <React.Fragment>{props.children}</React.Fragment>
    </div>
  );
};

ToolbarMode.displayName = '@v2/Toolbar.Mode';
