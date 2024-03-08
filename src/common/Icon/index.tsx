import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { DATA_ICON_LOOKUP } from '@/data';

export type IconType = keyof typeof DATA_ICON_LOOKUP;
export type IconName = keyof (typeof DATA_ICON_LOOKUP)['filled'];

type IconElementProps = React.ComponentPropsWithoutRef<'svg'>;
type IconRefProps = React.RefAttributes<SVGSVGElement>;
type IconBaseProps = IconElementProps & IconRefProps;

export interface IconProps extends IconBaseProps {
  type?: IconType;
  name?: IconName;
  label?: string;
}

const defaultProps: Partial<IconProps> = {
  type: 'filled',
  name: 'person',
};

function _Icon(props: IconProps, ref: React.ForwardedRef<SVGSVGElement>) {
  const { type, name, label, className, ...otherProps } = props;

  const clxss = clsx('icon', className);
  const _props = mergeProps({ type, name }, defaultProps);
  const _path = DATA_ICON_LOOKUP[_props.type!][_props.name!];

  return (
    <svg
      {...otherProps}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={clxss}
      aria-label={_props.name || label}
      children={<path d={_path} fill="currentColor" />}
    />
  );
}

export type IconComponent = React.ForwardRefExoticComponent<IconProps>;
export const Icon = React.forwardRef(_Icon) as IconComponent;
