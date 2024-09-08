import clsx from 'clsx';
import { Core } from '@/types';
import { ICON_MAP } from './library';
import { Component } from '@/factory';

export type IconFactory = Core.Factory<{
  ref: SVGSVGElement;
  props: Core.IconComponentProps;
  element: 'svg';
}>;

export const ICON_FILL_COLOR = {
  currentColor: 'currentColor',
  accent: 'hsla(var(--v2-hue-accent), 60%, 1)',
  yellow: 'hsla(var(--v2-hue-yellow), 60%, 1)',
  blue: 'hsla(var(--v2-hue-blue), 60%, 1)',
  cyan: 'hsla(var(--v2-hue-cyan), 60%, 1)',
  green: 'hsla(var(--v2-hue-green), 60%, 1)',
  grey: 'hsla(var(--v2-hue-grey), 60%, 1)',
  magenta: 'hsla(var(--v2-hue-magenta), 60%, 1)',
  orange: 'hsla(var(--v2-hue-orange), 60%, 1)',
  purple: 'hsla(var(--v2-hue-purple), 60%, 1)',
  red: 'hsla(var(--v2-hue-red), 60%, 1)',
  slate: 'hsla(var(--v2-hue-slate), 60%, 1)',
  stone: 'hsla(var(--v2-hue-stone), 60%, 1)',
  teal: 'hsla(var(--v2-hue-teal), 60%, 1)',
};

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
    const fillColor = ICON_FILL_COLOR[fill];

    return (
      <div className={clsx('v2-icon', className)} {...rootProps}>
        <svg
          {...props}
          ref={ref}
          fill={fillColor}
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
