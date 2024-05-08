import React from 'react';

interface ToolbarDirectionProps {
  children?: React.ReactNode | undefined;
}

type ToolbarDirectionComponent = React.FC<ToolbarDirectionProps>;

export const ToolbarDirection: ToolbarDirectionComponent = (props) => {
  return (
    <div className="v2-toolbar-direction">
      <React.Fragment>{props.children}</React.Fragment>
    </div>
  );
};

ToolbarDirection.displayName = '@v2/Toolbar.Direction';
