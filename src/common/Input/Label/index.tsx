import { Size } from '@/types/common';
import clsx from 'clsx';
import * as React from 'react';

type InputLabelElementProps = React.ComponentPropsWithoutRef<'label'>;
type InputLabelAttributeProps = React.RefAttributes<HTMLLabelElement>;
type InputLabelBaseProps = InputLabelElementProps & InputLabelAttributeProps;

type InputLabelProps = InputLabelBaseProps &
  Partial<{
    id: string;
    size: Size;
    text: string;
    disabled: boolean;
    inputId: string;
    descriptionId: string;
  }>;

const _InputLabel = (props: InputLabelProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
  const { id, text, size, disabled, descriptionId, className, ...otherProps } = props;
  const clxss = clsx('InputLabel', `InputLabel--size-${size}`, className);
  return (
    <label
      {...otherProps}
      htmlFor={id}
      className={clxss}
      aria-describedby={descriptionId}
      data-disabled={disabled}
      children={text}
      ref={ref}
    />
  );
};

export type InputLabelComponent = React.ForwardRefExoticComponent<InputLabelProps>;
export const InputLabel = React.forwardRef(_InputLabel) as InputLabelComponent;
