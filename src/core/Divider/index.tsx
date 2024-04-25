import clsx from 'clsx';
import React from 'react';
import { Core } from '@/types';

export interface DividerProps {
  orientation?: Core.Orientation | undefined;
  className?: string | undefined;
  position?: Core.Alignment | 'center';
  label?: React.ReactNode | undefined;
  size?: Core.Size5 | undefined;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    size = 'xs',
    label,
    position,
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  return (
    <div
      {...forwardedProps}
      ref={ref}
      role="separator"
      className={clsx('divider', className)}
      data-orientation={orientation}
      data-with-label={label !== undefined ? true : undefined}
      data-position={position}
      data-size={size}
    >
      {label && <span className="divider-label">{label}</span>}
      <div className="divider-seperator" />
    </div>
  );
});

Divider.displayName = 'common/Divider';
