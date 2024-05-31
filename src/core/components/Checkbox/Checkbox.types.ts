import { Core } from '@/types';

type CheckboxStatus = 'true' | 'false' | 'mixed';

interface CheckboxContext {
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CheckboxProps {
  label: string;
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  indeterminate?: boolean | undefined;
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
