import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { DATA_ICON_LOOKUP } from '@/data';
import { ElementProps } from '@/types';

export type IconType = keyof typeof DATA_ICON_LOOKUP;
export type IconName = keyof (typeof DATA_ICON_LOOKUP)['filled'];

export interface IconProps extends ElementProps<'svg'> {
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

export const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      className={clxss}
      aria-label={name || label}
      children={<path d={getIconPath(type, name)} fill="currentColor" />}
    />
  );
});

Icon.displayName = '@v2/Icon';
