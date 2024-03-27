import clsx from 'clsx';
import * as React from 'react';
import { BoxComponentType, BoxRenderType } from './types';

const BoxRender: BoxRenderType = (props, ref) => {
  const { scheme = 'primary', cols, className, children, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className={clsx('box', className)}
      ref={ref}
      data-box-scheme={scheme}
      data-box-cols={cols}
    >
      {children}
    </div>
  );
};

export const Box = React.forwardRef(BoxRender) as BoxComponentType;
Box.displayName = '@v2/Box';
