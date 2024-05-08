import React from 'react';

interface ToolbarAccentProps {
  children?: React.ReactNode | undefined;
}

type ToolbarAccentComponent = React.FC<ToolbarAccentProps>;

export const ToolbarAccent: ToolbarAccentComponent = (props) => {
  return (
    <div className="v2-toolbar-accent">
      <React.Fragment>{props.children}</React.Fragment>
    </div>
  );
};

ToolbarAccent.displayName = '@v2/Toolbar.Accent';
