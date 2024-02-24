import { Section } from '@/app/layouts';
import React from 'react';

export const AnimationBox = React.forwardRef<HTMLDivElement, React.JSX.IntrinsicElements['div']>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <div {...otherProps} ref={ref}>
        {children}
      </div>
    );
  }
);

export const AnimationContainer = () => {
  return <div style={{ height: 300, width: 300, outline: 'solid 2px dodgerBlue' }} />;
};

export const DemoAnimation = () => {
  return (
    <>
      <Section>
        <p>Animation</p>
      </Section>
    </>
  );
};
