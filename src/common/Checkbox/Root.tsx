import clsx from 'clsx';
import * as React from 'react';
import { Label } from '../Label';
import type { Core } from '@/types/core';
import type { Align, Justify, Size } from '@/types/common';

export type CheckboxProps = {
  size?: Size;
  align?: Align;
  justify?: Justify;
  info?: string;
  label?: string;
  error?: string;
  checked?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

export type CheckboxFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: CheckboxProps;
  component: 'button';
}>;

export const Checkbox: CheckboxFactory = React.forwardRef((props, ref) => {
  const {
    id,
    size = 'sm',
    align = 'center',
    justify = 'start',
    info,
    error,
    label,
    style,
    checked,
    disabled,
    readOnly,
    children,
    className,
    component: Component = 'button',
    ...otherProps
  } = props;

  const hasError = error !== undefined;

  const clxss = clsx(
    'Checkbox',
    { [`Checkbox--size-${size}`]: size },
    { [`Checkbox--align-${align}`]: align },
    { [`Checkbox--justify-${justify}`]: justify },
    className
  );

  return (
    <Component
      {...otherProps}
      ref={ref}
      className={clxss}
      data-error={hasError}
      data-disabled={disabled}
      data-readonly={readOnly}
      aria-disabled={disabled}
      aria-readonly={readOnly}
    >
      {children}
      <div className="Radio-inner">
        <Label htmlFor={id}>{label}</Label>
        <div>{error}</div>
        <div>{info}</div>
      </div>
    </Component>
  );
});

Checkbox.displayName = '@v2/Checkbox';

// export type CheckboxIndicatorProps = {
//   size?: Size;
//   checked?: boolean;
//   hasError?: boolean;
//   readOnly?: boolean;
//   disabled?: boolean;
// };

// export type CheckboxIndicatorFactory = Core.RefFactory<{
//   ref: HTMLDivElement;
//   props: CheckboxIndicatorProps;
//   component: 'div';
// }>;

// export const CheckboxIndicator: CheckboxIndicatorFactory = React.forwardRef((props, ref) => {
//   const {
//     size = 'sm',
//     checked,
//     hasError,
//     readOnly,
//     disabled,
//     className,
//     component: Component = 'div',
//     ...otherProps
//   } = props;

//   const icon = checked ? 'checkbox_checked' : 'checkbox_unchecked';
//   const iconLabel = checked ? 'input checked icon' : 'input unchecked icon';

//   return (
//     <Component
//       {...otherProps}
//       ref={ref}
//       data-error={hasError}
//       data-checked={checked}
//       data-readonly={readOnly}
//       data-disabled={disabled}
//     >
//       <Icon name={icon} aria-label={iconLabel} />
//     </Component>
//   );
// });
