import clsx from 'clsx';
import { mergeProps } from '@/utils';
import { SpaceComponent, SpaceProps } from './types';

const defaultProps: Partial<SpaceProps> = {};

export const Space: SpaceComponent = (props) => {
  const { size, className, ...otherProps } = mergeProps(defaultProps, props);
  return <div {...otherProps} className={clsx('space', `space--size-${size}`, className)} />;
};

Space.displayName = '@v2/Space';
