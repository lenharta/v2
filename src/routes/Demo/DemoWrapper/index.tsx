import { Title } from '@/core';
import React from 'react';

const DemoWrapper = (props: { children: React.ReactNode; title: string }) => {
  return (
    <div className="v2-demo-wrapper">
      <Title>{props.title}</Title>
      <div className="v2-demo-wrapper-canvas">
        <React.Fragment>{props.children}</React.Fragment>
      </div>
    </div>
  );
};

export { DemoWrapper };
