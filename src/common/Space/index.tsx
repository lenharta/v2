import clsx from 'clsx';
import { mergeProps } from '@/utils';
import type { Size } from '@/types/common';

export type SpaceBaseProps = Omit<React.JSX.IntrinsicElements['div'], 'children'>;

export interface SpaceProps extends SpaceBaseProps {
  size?: Size;
}

export interface SpaceComponent {
  (props: SpaceProps): JSX.Element | null;
  displayName?: string;
}

const defaultProps: Partial<SpaceProps> = {};

export const Space: SpaceComponent = (props) => {
  const { size, className, ...otherProps } = props;

  const mergedProps = mergeProps({ size }, defaultProps);

  const clxss = clsx('Space', { [`Space--size-${mergedProps.size}`]: mergedProps.size }, className);

  return <div {...otherProps} className={clxss} />;
};

Space.displayName = '@v2/Space';
