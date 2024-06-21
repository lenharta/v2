import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { IconProps } from './Icon.types';
import { ICON_MAP } from './library';

type IconFactory = Factory.Config<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: IconProps;
}>;

// Replace children with path lookup

const Icon = factory<IconFactory>((props, ref) => {
  const {
    name = 'shape-circle',
    type = 'outline',
    size = 'sm',
    children,
    className,
    ...forwardedProps
  } = props;

  return (
    <svg
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={clsx('v2-icon', `v2-icon--size-${size}`, className)}
      data-icon-name={name}
      {...forwardedProps}
    >
      {ICON_MAP[type][name]}
    </svg>
  );
});

Icon.displayName = '@v2/Icon';
export { Icon };
