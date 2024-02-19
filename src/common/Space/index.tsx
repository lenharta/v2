import clsx from 'clsx';
import { Core } from '@/types/core';
import { Size } from '@/types/common';

export type SpaceProps = {
  size?: Size;
};

export type SpaceFactory = Core.BaseFactory<{
  props: SpaceProps;
  component: 'div';
}>;

export const Space: SpaceFactory = (props) => {
  const { size = 'xs', className, component: Component = 'div', ...otherProps } = props;
  const clxss = clsx('Space', { [`Space--size-${size}`]: size }, className);
  return <Component {...otherProps} className={clxss} />;
};
