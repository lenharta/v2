import { IconProps } from '../Icon';
import { GroupProps } from '../Group';
import { InlineInputProps } from '../InlineInput';
import React from 'react';

type CheckboxShape = 'circle' | 'square';
type CheckboxState = 'checked' | 'unchecked' | 'mixed';

interface CheckboxIndicatorProps extends Partial<IconProps> {
  icon?: Partial<IconProps> | undefined;
  shape?: CheckboxShape | undefined;
  value?: React.JSX.IntrinsicElements['input']['value'] | undefined;
  mixed?: boolean | undefined;
  checked?: boolean | undefined;
}

interface CheckboxProps extends InlineInputProps {
  label: string;
  icon?: Partial<IconProps> | undefined;
  mixed?: boolean | undefined;
  shape?: CheckboxShape | undefined;
  value?: string | undefined;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  wrapperProps?: InlineInputProps | undefined;
}

interface CheckboxGroupProps extends GroupProps {
  onChange: (value: string[]) => void;
  shape?: CheckboxShape | undefined;
  value: string[];
}

interface CheckboxContext {
  onChange?: (value: string) => void;
  shape?: CheckboxShape | undefined;
  value: string[];
}

export type {
  CheckboxShape,
  CheckboxState,
  CheckboxIndicatorProps,
  CheckboxProps,
  CheckboxGroupProps,
  CheckboxContext,
};
