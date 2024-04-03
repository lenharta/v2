import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface SpaceProps {
  /** Defines a default HTML `class` that will be appended to the Space elements classList */
  className?: string | undefined;
}

export type SpaceFactory = Core.Factory<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SpaceProps;
}>;

const Space = factory<SpaceFactory>((props, ref) => {
  const { className, ...otherProps } = props;
  return <div {...otherProps} ref={ref} className={clsx('space', className)} />;
});

Space.displayName = '@v2/core/Space';
