import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Icon } from '../Icon';
import { Label } from '../Label';

export type DividerFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.DividerProps;
  element: 'div';
}>;

export const Divider = Component<DividerFactory>(
  (
    {
      size,
      icon,
      label,
      variant,
      decoration,
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
        className={clsx(
          'v2-divider',
          `v2-divider--${size || 'sm'}`,
          `v2-divider--${variant || 'default'}`,
          `v2-divider--${decoration || 'solid'}`,
          className
        )}
        {...props}
      >
        <span
          className="v2-divider-content"
          data-position={labelPosition}
          data-with-icon={!!icon || undefined}
          data-with-label={!!label || undefined}
        >
          {icon && iconPosition === 'start' && <Icon {...icon} />}

          {label && <Label className="v2-divider-label">{label}</Label>}

          {icon && iconPosition === 'end' && <Icon {...icon} />}
        </span>
      </div>
    );
  }
);

Divider.displayName = '@v2/Divider';
