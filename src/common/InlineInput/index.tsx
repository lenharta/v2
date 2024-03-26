import clsx from 'clsx';
import * as React from 'react';
import { Text } from '@/common';
import { useInputIds } from '@/hooks';
import { UnstyledButton } from '@/common/Button/Unstyled';
import {
  InputLabelProps,
  InputDescriptionProps,
  InlineInputRenderType,
  InlineInputComponentType,
} from '@/common/InlineInput/types';

const InlineInputLabel = (props: InputLabelProps) => {
  const { ids, size, label, error, disabled, ...otherProps } = props;

  const dataProps = {
    ...(size ? { 'data-size': size } : {}),
    ...(error ? { 'data-error': true } : {}),
    ...(disabled ? { 'data-disabled': true } : {}),
  };

  return (
    <label
      {...otherProps}
      {...dataProps}
      id={ids.label}
      htmlFor={ids.input}
      children={label}
      className="label"
      aria-describedby={ids.description}
    />
  );
};

const InlineInputDescription = (props: InputDescriptionProps) => {
  const { id, size, error, disabled, description, ...otherProps } = props;

  if (!description) return null;

  const dataProps = {
    ...(size ? { 'data-size': size } : {}),
    ...(error ? { 'data-error': true } : {}),
    ...(disabled ? { 'data-disabled': true } : {}),
  };

  return (
    <Text
      {...otherProps}
      {...dataProps}
      children={description}
      className="description"
      role="note"
      id={id}
    />
  );
};

const InlineInputRender: InlineInputRenderType = (props, ref) => {
  const {
    id,
    size = 'md',
    label,
    group,
    error,
    scheme = 'primary',
    children,
    disabled,
    className,
    description,
    ...otherProps
  } = props;

  const uid = useInputIds(id, ['label', 'description']);
  const isLabel = otherProps['aria-label'] || label;
  const isError = error !== undefined;

  const accessibleProps = {
    role: otherProps.role || 'checkbox',
    ...(group ? { 'aria-labelledby': group } : {}),
    ...(isLabel ? { 'aria-label': isLabel } : {}),
    ...(isError ? { 'aria-errormessage': error } : {}),
    ...(disabled ? { 'aria-disabled': true } : {}),
  };

  const dataProps = {
    ...(size ? { 'data-input-size': size } : {}),
    ...(scheme ? { 'data-input-scheme': scheme } : {}),
    ...(isError ? { 'data-input-error': isError } : {}),
  };

  return (
    <UnstyledButton
      {...otherProps}
      {...dataProps}
      {...accessibleProps}
      className={clsx('inline-input', className)}
      ref={ref}
      id={id}
    >
      {children}

      <span className="inner">
        <InlineInputLabel
          ids={{ input: id, label: uid.label, description: uid.description }}
          disabled={disabled}
          label={isLabel}
          error={error}
          size={size}
        />
        <InlineInputDescription
          id={uid.description}
          description={description}
          disabled={disabled}
          error={error}
          size={size}
        />
      </span>
    </UnstyledButton>
  );
};

export const InlineInput = React.forwardRef(InlineInputRender) as InlineInputComponentType;
InlineInput.displayName = '@v2/InlineInput';
