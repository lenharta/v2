import clsx from 'clsx';
import { Core, factory } from '../factory';
import { DATA_ICON_LOOKUP } from '@/data';

export type ICON = keyof (typeof DATA_ICON_LOOKUP)['filled'];

export interface IconProps {
  label?: string | undefined;
  name?: ICON | undefined;
  type?: 'filled' | 'outlined' | undefined;
}

export type IconFactory = Core.Factory<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: IconProps;
  omits: 'children';
}>;

export const Icon = factory<IconFactory>((props, ref) => {
  const {
    fill,
    type = 'outlined',
    name = 'placeholder',
    label,
    xmlns = 'http://www.w3.org/2000/svg',
    viewBox = '0 0 24 24',
    className,
    ...otherProps
  } = props;

  const hasPath = DATA_ICON_LOOKUP[type][name];
  const hasLabel = otherProps['aria-label'] ?? label;

  return (
    <svg
      {...otherProps}
      ref={ref}
      xmlns={xmlns}
      viewBox={viewBox}
      className={clsx('icon', className)}
      aria-label={hasLabel ?? name}
    >
      <path d={hasPath} fill="currentColor" />
    </svg>
  );
});

Icon.displayName = '@v2/core/Icon';
