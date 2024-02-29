import { Size } from '@/types/common';
import clsx from 'clsx';
import * as React from 'react';

type InputDescriptionElementProps = React.ComponentPropsWithoutRef<'p'>;
type InputDescriptionAttributeProps = React.RefAttributes<HTMLParagraphElement>;
type InputDescriptionBaseProps = InputDescriptionElementProps & InputDescriptionAttributeProps;

type InputDescriptionProps = InputDescriptionBaseProps &
  Partial<{
    id: string;
    size: Size;
    text: string;
    disabled: boolean;
  }>;

const _InputDescription = (
  props: InputDescriptionProps,
  ref: React.ForwardedRef<HTMLParagraphElement>
) => {
  const { id, text, size, disabled, className, ...otherProps } = props;
  const clxss = clsx('InputDescription', `InputDescription--size-${size}`, className);
  return (
    <p
      {...otherProps}
      className={clxss}
      aria-describedby={id}
      data-disabled={disabled}
      children={text}
      ref={ref}
    />
  );
};

export type InputDescriptionComponent = React.ForwardRefExoticComponent<InputDescriptionProps>;
export const InputDescription = React.forwardRef(_InputDescription) as InputDescriptionComponent;
