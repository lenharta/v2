export type InlineInputStatus = 'idle' | 'warning' | 'success' | 'error' | 'danger';

export interface InlineInputProps {
  label?: string | undefined;
  error?: string | undefined;
  status?: InlineInputStatus | undefined;
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  readOnly?: boolean | undefined;
  loading?: boolean | undefined;
  message?: string | undefined;
}
