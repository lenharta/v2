import clsx from 'clsx';
import React from 'react';
import { Icon, IconName } from '..';
import { mergeProps } from '@/utils';
import { Size } from '@/types/common';

type ToolButtonScheme = 'default' | 'inverted' | 'accent';
type ToolButtonElementProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'value' | 'onChange'>;
type ToolButtonAttributeProps = React.RefAttributes<HTMLButtonElement>;
type ToolButtonBaseProps = ToolButtonElementProps & ToolButtonAttributeProps;

export type ToolButtonProps = ToolButtonBaseProps & {
  icon?: IconName;
  size?: Size;
  label: string;
  value?: string | boolean | number;
  scheme?: ToolButtonScheme;
  onChange?: (value?: string | boolean | number) => void;
};

const defaultProps: Partial<ToolButtonProps> = {
  scheme: 'default',
  icon: 'infoCircle',
};

function _ToolButton(props: ToolButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const {
    icon,
    size,
    value,
    label,
    scheme,
    onClick,
    onChange,
    className,
    children,
    ...otherProps
  } = props;

  const _props = mergeProps({ scheme, size, icon }, defaultProps);

  const clxss = clsx(
    'ToolButton',
    `ToolButton--size-${_props.size}`,
    `ToolButton--scheme-${_props.scheme}`,
    className
  );

  return (
    <button
      {...otherProps}
      ref={ref}
      children={<Icon name={_props.icon} />}
      className={clxss}
      aria-label={label}
      onClick={(event) => {
        onClick?.(event);
        onChange?.(value);
      }}
    />
  );
}

export type ToolButtonComponent = React.ForwardRefExoticComponent<ToolButtonProps>;
export const ToolButton = React.forwardRef(_ToolButton) as ToolButtonComponent;
ToolButton.displayName = '@v2/ToolButton';
