import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useInputIds } from '@/hooks';
import { UnstyledButton } from '../Button/Unstyled';
import { InlineInputText } from './InlineInputText';
import { InlineInputLabel } from './InlineInputLabel';
import { InlineInputComponent, InlineInputProps, InlineInputRenderType } from './types';

const defaultProps: Partial<InlineInputProps> = {
  size: 'md',
};

const InlineInputRender: InlineInputRenderType = (props, ref) => {
  const { id, size, label, className, disabled, elevated, children, ...otherProps } = mergeProps(
    defaultProps,
    props
  );

  const ids = useInputIds(id, ['label', 'text']);

  const isDisabled = disabled !== undefined ? true : undefined;
  const isElevated = elevated !== undefined ? true : undefined;

  const clxss = clsx('inline-input', className);
  const hasSize = !size ? undefined : size;

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      className={clxss}
      data-disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {children}
      <span className="inner">
        <InlineInput.Label htmlFor={ids.label} label={label} />
        <InlineInput.Text id={ids.text} />
      </span>
    </UnstyledButton>
  );
};

export const InlineInput = React.forwardRef(InlineInputRender) as InlineInputComponent;
InlineInput.displayName = '@v2/InlineInput';
InlineInput.Label = InlineInputLabel;
InlineInput.Text = InlineInputText;
