import clsx from 'clsx';
import * as React from 'react';
import { Size } from '@/types/common';

type DescriptionBaseProps = React.ComponentPropsWithoutRef<'p'>;

export interface InputDescriptionProps extends DescriptionBaseProps {
  id?: string;
  size?: Size;
  text?: string;
  disabled?: boolean;
}

const _InputDescription = (
  props: InputDescriptionProps,
  ref: React.ForwardedRef<HTMLParagraphElement>
) => {
  const { id, text, size, disabled, className, ...otherProps } = props;
  const clxss = clsx('input-description', `input-description--size-${size}`, className);
  return (
    <p
      {...otherProps}
      ref={ref}
      children={text}
      className={clxss}
      data-disabled={disabled}
      aria-describedby={id}
    />
  );
};

export const InputDescription = React.forwardRef(
  _InputDescription
) as React.ForwardRefExoticComponent<
  InputDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>;

InputDescription.displayName = '@v2/Input.Description';
