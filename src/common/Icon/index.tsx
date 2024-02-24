import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { DATA_ICON_LOOKUP } from '@/data';
import type { Size } from '@/types/common';
import type { Accent } from '@/types/store';

export type IconType = keyof typeof DATA_ICON_LOOKUP;

export type IconName = keyof (typeof DATA_ICON_LOOKUP)['filled'];

export type IconBaseProps = React.JSX.IntrinsicElements['svg'];

export interface IconProps extends IconBaseProps {
  size?: Size;
  type?: IconType;
  name?: IconName;
  accent?: Accent;
}

const defaultProps: Partial<IconProps> = {
  type: 'filled',
  name: 'person',
  size: 'sm',
};

export const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { type, name, size, style, accent, className, ...otherProps } = props;

  const mergedProps = mergeProps({ type, name, size }, defaultProps);

  const iconPath = DATA_ICON_LOOKUP[mergedProps.type || 'filled'][mergedProps.name || 'person'];

  const clxss = clsx('Icon', { [`Icon--size-${mergedProps.size}`]: mergedProps.size }, className);

  return (
    <svg
      {...otherProps}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={clxss}
      children={<path d={iconPath} fill="currentColor" />}
    />
  );
});
