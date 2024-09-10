import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type DividerFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.DividerProps;
  element: 'div';
}>;

export const Divider = Component<DividerFactory>(
  (
    {
      icon,
      label,
      decoration = 'solid',
      iconPosition = 'start',
      labelPosition = 'start',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="separator"
        data-position={labelPosition}
        className={clsx('v2-divider', `v2-divider--decoration-${decoration}`, className)}
        {...props}
      >
        <div
          className="v2-divider-content"
          data-position={labelPosition}
          data-with-icon={!!icon || undefined}
          data-with-label={!!label || undefined}
        >
          {icon && iconPosition === 'start' && icon}

          {label && <span className="v2-divider-label">{label}</span>}

          {icon && iconPosition === 'end' && icon}
        </div>
      </div>
    );
  }
);

Divider.displayName = '@v2/Divider';
