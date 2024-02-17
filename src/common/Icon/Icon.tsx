import * as React from 'react';
import { DATA_ICON_LOOKUP } from '@/data';
import type { Core } from '@/types/core';
import { mergeProps } from '@/utils';

export type IconType = keyof typeof DATA_ICON_LOOKUP;
export type IconName = keyof (typeof DATA_ICON_LOOKUP)['filled'];

export type IconProps = {
  type?: IconType;
  name?: IconName;
};

export type IconFactory = Core.RefFactory<{
  ref: SVGSVGElement;
  props: IconProps;
  component: 'svg';
}>;

const defaultProps: Partial<IconProps> = {
  type: 'outlined',
  name: 'person',
};

function findIcon(props: IconProps) {
  const { type = 'filled', name = 'person' } = props;
  return DATA_ICON_LOOKUP[type][name];
}

export const Icon: IconFactory = React.forwardRef((props, ref) => {
  const { type, name, component: Component = 'svg', ...otherProps } = props;

  const mergedProps = mergeProps({ type, name }, defaultProps);
  const path = findIcon({ type: mergedProps.type, name: mergedProps.name });

  return (
    <Component
      {...otherProps}
      ref={ref}
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} fill="currentColor" />
    </Component>
  );
});
