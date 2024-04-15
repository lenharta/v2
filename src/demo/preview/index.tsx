import * as React from 'react';

export interface PreviewProps {
  children?: React.ReactNode | undefined;
}

export type PreviewComponent = React.FC<PreviewProps> & {};

export const Preview: PreviewComponent = (props) => {
  const { children } = props;
  return (
    <div id="preview" className="preview" role="presentation">
      {children}
    </div>
  );
};

Preview.displayName = '@v2/demo/Preview';
