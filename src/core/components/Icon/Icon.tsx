import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { ICON_MAP } from './library';
import { IconProps } from './types';

type IconFactory = Factory.Config<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: IconProps;
}>;

const Icon = createFactory<IconFactory>((props, ref) => {
  const {
    size = 'sm',
    type = 'outline',
    name = 'shape-circle',
    fill,
    style,
    alpha,
    children,
    className,
    ...forwardedProps
  } = props;

  const theme = fill
    ? {
        fill: `rgba(var(--c-rgb-${fill}), ${alpha || 1})`,
      }
    : {};

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={clsx('v2-icon', `v2-icon--size-${size}`, className)}
      style={{ ...style, ...theme }}
      data-icon-name={name}
      {...forwardedProps}
    >
      {ICON_MAP[type][name]}
    </svg>
  );
});

Icon.displayName = '@v2/Icon';
export { Icon };
