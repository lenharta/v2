import React from 'react';

interface ToolbarProps {
  children?: React.ReactNode | undefined;
}

type ToolbarComponent = React.FC<ToolbarProps>;

export const Toolbar: ToolbarComponent = (props) => {
  return (
    <div className="v2-Toolbar">
      <React.Fragment>{props.children}</React.Fragment>
    </div>
  );
};

Toolbar.displayName = '@v2/Toolbar';
