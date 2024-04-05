import { Core, Factory } from '@/types';
import { DATA_ICON_LOOKUP } from '@/data';
import { factory } from '../factory';
import clsx from 'clsx';

export type ICON = keyof (typeof DATA_ICON_LOOKUP)['filled'];

export interface IconProps extends Core.BaseProps {
  /** Specifies the lookup key for the path that will be rendered. Each `name` key has two types available, choose from `filled` or `outlined`. */
  name?: ICON | undefined;
  /** Specifies the style of icon rendered, choose from `filled` or `outlined`. Each `type` has a corresponding `name` key. */
  type?: 'filled' | 'outlined' | undefined;
  /** Specifies a shorthand for the CSS `fill` property for the `Icon` element path. */
  fill?: React.CSSProperties['fill'] | undefined;
  /** Specifies the XML namespace for the `Icon` element. */
  xmlns?: string | undefined;
  /** Specifies the viewBox for the `Icon` element. */
  viewBox?: string | undefined;
}

export type IconFactory = Factory.Config<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: IconProps;
  omits: 'children';
}>;

export const Icon = factory<IconFactory>((props, ref) => {
  const {
    fill = 'currentColor',
    type = 'outlined',
    name = 'placeholder',
    xmlns = 'http://www.w3.org/2000/svg',
    viewBox = '0 0 24 24',
    className,
    ...otherProps
  } = props;

  let iconPath = DATA_ICON_LOOKUP[type][name];
  let iconLabel = otherProps['aria-label'] || name;

  let accessibleProps = {
    ...(iconLabel ? { title: iconLabel } : {}),
    ...(iconLabel ? { 'aria-label': iconLabel } : {}),
  };

  return (
    <svg
      {...otherProps}
      {...accessibleProps}
      className={clsx('icon', className)}
      viewBox={viewBox}
      xmlns={xmlns}
      ref={ref}
    >
      <path d={iconPath} fill={fill} />
    </svg>
  );
});

Icon.displayName = '@v2/core/Icon';
