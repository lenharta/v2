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
  type: 'outlined',
  name: 'placeholder',
};

const getIconPath = (type: IconType = 'outlined', name: IconName = 'placeholder'): string => {
  return DATA_ICON_LOOKUP[type][name];
};

function _Icon(props: IconProps, ref: React.ForwardedRef<SVGSVGElement>) {
  const { type, name, fill, label, xmlns, className, ...otherProps } = mergeProps(
    defaultProps,
    props
  );

  const clxss = clsx('icon', className);

  return (
    <svg
      {...otherProps}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-label={name || label}
      className={clxss}
    >
      <path d={getIconPath(type, name)} fill="currentColor" />
    </svg>
  );
}

export const Icon = React.forwardRef(_Icon) as React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

Icon.displayName = '@v2/Icon';
