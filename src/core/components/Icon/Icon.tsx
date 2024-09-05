import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { ICON_MAP } from './library';

export type IconFactory = Core.Factory<{
  ref: SVGSVGElement;
  props: Core.IconComponentProps;
  element: 'svg';
}>;

export const Icon = Component<IconFactory>(
  (
    {
      type = 'outline',
      name = 'shape-circle',
      fill = 'currentColor',
      children,
      className,
      rootProps,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx('v2-icon', className)} {...rootProps}>
        <svg
          {...props}
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="v2-icon-vector"
          data-icon-name={name}
        >
          {ICON_MAP[type][name]}
        </svg>
      </div>
    );
  }
);

Icon.displayName = '@v2/Icon';
