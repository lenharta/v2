import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { DATA_ICON_LOOKUP } from '@/data';
import { createTokenStyle } from '../utils';
import type { Core } from '@/types/core';
import type { Size } from '@/types/common';
import type { Accent } from '@/types/store';

export type IconType = keyof typeof DATA_ICON_LOOKUP;
export type IconName = keyof (typeof DATA_ICON_LOOKUP)['filled'];

export type IconProps = {
  size?: Size;
  type?: IconType;
  name?: IconName;
  accent?: Accent;
};

export type IconFactory = Core.RefFactory<{
  ref: SVGSVGElement;
  props: IconProps;
  component: 'svg';
}>;

const defaultProps: Partial<IconProps> = {
  type: 'outlined',
  name: 'person',
  size: 'sm',
};

function findIcon(type: IconType = 'outlined', name: IconName = 'person') {
  return DATA_ICON_LOOKUP[type][name];
}

export const Icon: IconFactory = React.forwardRef((props, ref) => {
  const {
    type,
    name,
    accent,
    size,
    style,
    className,
    component: Component = 'svg',
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ type, name, size }, defaultProps);

  const token = accent ? accent : undefined;
  const tokenStyles = createTokenStyle(['fill', 'color'], token, 0.93);
  const currentColor = { fill: 'currentColor' };

  const path = findIcon(mergedProps.type, mergedProps.name);
  const pathStyles = accent !== undefined ? tokenStyles : currentColor;

  const clxss = clsx('Icon', { [`Icon--size-${mergedProps.size}`]: mergedProps.size }, className);

  return (
    <Component
      {...otherProps}
      ref={ref}
      style={{ ...pathStyles, ...style }}
      xmlns="http://www.w3.org/2000/svg"
      className={clxss}
      viewBox="0 0 24 24"
      height={24}
      width={24}
    >
      <path d={path} {...currentColor} />
    </Component>
  );
});
