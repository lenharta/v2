import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutError } from './LayoutError';

type LayoutFactory = React.FC<{}> & {
  Error: typeof LayoutError;
};

const Layout: LayoutFactory = ({}) => (
  <React.Fragment>
    <Outlet />
  </React.Fragment>
);

Layout.Error = LayoutError;
Layout.displayName = '@v2/Layout';
export { Layout };
