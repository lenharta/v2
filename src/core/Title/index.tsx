import clsx from 'clsx';
import { factory } from '../factory';
import { Core, Factory } from '@/types';
import { getHeadingLevel } from '../utils';

const defaultComponent = 'h2';

export interface TitleProps extends Core.BaseProps, Core.HeadingProps {}

export type TitleFactory = Factory.Config<{
  ref: HTMLHeadingElement;
  comp: typeof defaultComponent;
  props: TitleProps;
}>;

export const Title = factory<TitleFactory>((props, ref) => {
  const { h1, h2, h3, h4, h5, h6, children, className, ...otherProps } = props;
  const Component = getHeadingLevel({ h1, h2, h3, h4, h5, h6 }, defaultComponent);
  return (
    <Component {...otherProps} ref={ref} className={clsx('title', className)}>
      {children}
    </Component>
  );
});

Title.displayName = '@v2/core/Title';
