import clsx from 'clsx';
import * as React from 'react';
import { BoxComponentType, BoxRenderType } from './types';

const BoxRender: BoxRenderType = (props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <div {...otherProps} className={clsx('box-layout', className)} ref={ref}>
      {children}
    </div>
  );
};

export const Box = React.forwardRef(BoxRender) as BoxComponentType;
Box.displayName = '@v2/Box';
