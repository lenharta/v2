import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface SpaceProps extends Core.BaseProps {}

export type SpaceFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SpaceProps;
  omits: 'children';
}>;

const Space = factory<SpaceFactory>((props, ref) => {
  const { className, ...otherProps } = props;
  return <div {...otherProps} ref={ref} className={clsx('space', className)} />;
});

Space.displayName = '@v2/core/Space';
