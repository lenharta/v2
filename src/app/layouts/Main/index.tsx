import * as React from 'react';

interface MainProps {
  children?: React.ReactNode | undefined;
}

const Main: React.FC<MainProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <main className="v2-layout-main" {...forwardedProps}>
      {children}
    </main>
  );
};

Main.displayName = '@v2/Layout.Main';
export { Main };
