import { Core } from '@/types';

type CheckboxStatus = 'true' | 'false' | 'mixed';

interface CheckboxContext {
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  orientation: Core.Orientation;
}

interface CheckboxProps {
  label: string;
  variant?: 'default' | 'elevated';
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  indeterminate?: boolean | undefined;
  description?: React.ReactNode | undefined;
  error?: React.ReactNode | undefined;
}

interface CheckboxGroupProps {
  value: string[];
  onChange: (value: string[]) => void;
  orientation?: Core.Orientation | undefined;
}

interface CheckboxIndicatorProps {
  status: CheckboxStatus;
}

export type {
  CheckboxStatus,
  CheckboxContext,
  CheckboxProps,
  CheckboxGroupProps,
  CheckboxIndicatorProps,
};
