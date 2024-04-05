import clsx from 'clsx';
import { factory } from '../factory';
import { Core, Factory } from '@/types';
import { getHeadingLevel } from '../utils';

const defaultComponent = 'h3' as const;

export interface SubtitleProps extends Core.BaseProps, Core.HeadingProps {}

export type SubtitleFactory = Factory.Config<{
  ref: HTMLHeadingElement;
  comp: typeof defaultComponent;
  props: SubtitleProps;
}>;

export const Subtitle = factory<SubtitleFactory>((props, ref) => {
  const { h1, h2, h3, h4, h5, h6, children, className, ...otherProps } = props;
  const Component = getHeadingLevel({ h1, h2, h3, h4, h5, h6 }, defaultComponent);
  return (
    <Component {...otherProps} ref={ref} className={clsx('subtitle', className)}>
      {children}
    </Component>
  );
});

Subtitle.displayName = '@v2/core/Subtitle';
