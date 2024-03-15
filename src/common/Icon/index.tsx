import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { DATA_ICON_LOOKUP } from '@/data';

export type IconType = keyof typeof DATA_ICON_LOOKUP;
export type IconName = keyof (typeof DATA_ICON_LOOKUP)['filled'];

type IconBaseProps = React.ComponentPropsWithoutRef<'svg'>;

export interface IconProps extends IconBaseProps {
  type?: IconType;
  name?: IconName;
  label?: string;
}

const defaultProps: Partial<IconProps> = {
  type: 'filled',
  name: 'placeholder',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  height: 24,
  width: 24,
};

function _Icon(props: IconProps, ref: React.ForwardedRef<SVGSVGElement>) {
  const {
    type,
    name,
    fill: pathColor,
    label,
    xmlns,
    height,
    width,
    viewBox,
    className,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const clxss = clsx('icon', className);
  const pathLookup = DATA_ICON_LOOKUP[type!][name!];

  return (
    <svg
      {...otherProps}
      ref={ref}
      xmlns={xmlns}
      width={width}
      height={height}
      viewBox={viewBox}
      className={clxss}
      aria-label={name || label}
      children={<path d={pathLookup} fill={pathColor} />}
    />
  );
}

export const Icon = React.forwardRef(_Icon) as React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

Icon.displayName = '@v2/Icon';
