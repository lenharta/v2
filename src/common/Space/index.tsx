import clsx from 'clsx';
import { mergeProps } from '@/utils';
import { SizeExpanded } from '@/types/common';

type SpaceBaseProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>;

export interface SpaceProps extends SpaceBaseProps {
  size?: SizeExpanded;
}

const defaultProps: Partial<SpaceProps> = {};

export const Space = (props: SpaceProps) => {
  const { size, className, ...otherProps } = mergeProps(defaultProps, props);
  const clxss = clsx('space', `space--size-${size}`, className);
  return <div {...otherProps} className={clxss} />;
};

Space.displayName = '@v2/Space';
