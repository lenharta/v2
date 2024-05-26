import React from 'react';

interface DemoRootProps {
  children: React.ReactNode;
  className?: string | undefined;
}

const DemoRoot = (props: DemoRootProps) => {
  return (
    <div className="v2-demo-root">
      <React.Fragment>{props.children}</React.Fragment>
    </div>
  );
};

export { DemoRoot };
