import clsx from 'clsx';
import { Core, factory } from '../factory';
import { DATA_ICON_LOOKUP } from '@/data';

export type ICON = keyof (typeof DATA_ICON_LOOKUP)['filled'];

export interface IconProps {
  /**
   * - Specifies the lookup key for the path that will be rendered.
   * - Each `name` key has two types available, choose from `filled` -or- `outlined`.
   * @see {IconProps.type}
   * @default 'placeholder'
   */
  name?: ICON | undefined;

  /**
   * - Specifies the style of icon rendered, choose from `filled` -or- `outlined`.
   * - Each `type` has a corresponding `name` key.
   * @see {IconProps.name}
   * @default 'filled'
   */
  type?: 'filled' | 'outlined' | undefined;

  /**
   * Specifies a shorthand for the CSS `fill` property for the `Icon` element path.
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
   * @default 'currentColor'
   */
  fill?: React.CSSProperties['fill'] | undefined;

  /**
   * Specifies the XML namespace for the `Icon` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course#declaring_namespaces
   * @default 'http://www.w3.org/2000/svg'
   */
  xmlns?: string | undefined;

  /**
   * Specifies the viewBox for the `Icon` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
   * @default '0 0 24 24'
   */
  viewBox?: string | undefined;

  /**
   * Defines a default html `class` appended to the `Icon` element classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'icon'
   */
  className?: string | undefined;
}

export type IconFactory = Core.Factory<{
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
