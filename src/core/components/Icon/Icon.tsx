import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { IconProps } from './Icon.types';

type IconFactory = Factory.Config<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: IconProps;
}>;

// Replace children with path lookup

const Icon = factory<IconFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <svg ref={ref} className={clsx('v2-icon', className)} {...forwardedProps}>
      {children}
    </svg>
  );
});

Icon.displayName = '@v2/Icon';
export { Icon };
