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
  accent: 'var(--v2-color-accent)',
  yellow: 'var(--v2-color-yellow)',
  blue: 'var(--v2-color-blue)',
  cyan: 'var(--v2-color-cyan)',
  green: 'var(--v2-color-green)',
  grey: 'var(--v2-color-grey)',
  magenta: 'var(--v2-color-magenta)',
  orange: 'var(--v2-color-orange)',
  purple: 'var(--v2-color-purple)',
  red: 'var(--v2-color-red)',
  slate: 'var(--v2-color-slate)',
  stone: 'var(--v2-color-stone)',
  teal: 'var(--v2-color-teal)',
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
