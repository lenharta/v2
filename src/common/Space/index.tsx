import clsx from 'clsx';
import * as React from 'react';
import { SpaceComponentType, SpaceRenderType } from './types';

const SpaceRender: SpaceRenderType = (props, ref) => {
  const { size = 'md', className, ...otherProps } = props;
  return <div {...otherProps} className={clsx('space', className)} ref={ref} data-size={size} />;
};

const Space = React.forwardRef(SpaceRender) as SpaceComponentType;
Space.displayName = '@v2/Space';
