interface InlineInputThemeProps {}

interface InlineInputProps extends InlineInputThemeProps {
  label?: string | undefined;
  error?: string | undefined;
  status?: 'idle' | 'warning' | 'success' | 'error' | 'danger' | undefined;
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  readOnly?: boolean | undefined;
  loading?: boolean | undefined;
  message?: string | undefined;
}

export type { InlineInputProps, InlineInputThemeProps };
