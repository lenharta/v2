import { Core } from '@/types';

type CheckboxValue<T> = T extends true ? string[] : string;
type CheckboxStatus = 'indeterminate' | 'checked' | 'unchecked';

interface CheckboxStatusProps {
  isIndeterminate: boolean;
  isChecked: boolean;
}

interface CheckboxContext {
  value: string | string[];
}

interface CheckboxProps {
  icon?: React.ReactNode | undefined;
  label: string;
  value: string | string[];
  error?: string | undefined;
  message?: string | undefined;
  disabled?: boolean | undefined;
  iconPosition?: Core.Align;
  onChange?: ((event: React.ChangeEvent<HTMLButtonElement>) => void) | undefined;
}

interface CheckboxGroupProps {
  value: string | string[];
  onChange: (value: string | string[]) => void;
  disabled?: boolean | undefined;
  orientation?: Core.Orientation | undefined;
}

export type {
  CheckboxValue,
  CheckboxProps,
  CheckboxStatus,
  CheckboxContext,
  CheckboxGroupProps,
  CheckboxStatusProps,
};
