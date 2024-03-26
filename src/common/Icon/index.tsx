import clsx from 'clsx';
import * as React from 'react';
import { DATA_ICON_LOOKUP } from '@/data';
import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

export type IconLookup = typeof DATA_ICON_LOOKUP;
export type IconType = keyof IconLookup;
export type IconName = keyof IconLookup['filled'];

export interface IconProps extends ElementProps<'svg'> {
  type?: IconType | undefined;
  name?: IconName | undefined;
  label?: string | undefined;
}

type IconRenderType = ExoticRender<SVGSVGElement, IconProps>;
type IconComponentType = ExoticComponent<SVGSVGElement, IconProps>;

const IconRender: IconRenderType = (props, ref) => {
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

  return (
    <svg
      {...otherProps}
      ref={ref}
      xmlns={xmlns}
      viewBox={viewBox}
      className={clsx('icon', className)}
      aria-label={(otherProps['aria-label'] || label) ?? name}
      children={<path d={DATA_ICON_LOOKUP[type][name]} fill="currentColor" />}
    />
  );
};

export const Icon = React.forwardRef(IconRender) as IconComponentType;
Icon.displayName = '@v2/Icon';
