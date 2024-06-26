import { Theme } from '@/types';

interface InlineInputThemeProps {
  size?: Theme.SizeRegular | undefined;
  variant?: 'default' | 'default-elevated' | 'accent' | 'accent-elevated' | undefined;
}

interface InlineInputProps extends InlineInputThemeProps {
  label?: string | undefined;
  error?: string | undefined;
  status?: 'idle' | 'warning' | 'success' | 'error' | 'danger' | undefined;
  checked?: boolean | undefined;
  message?: string | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  loading?: boolean | undefined;
}

export type { InlineInputProps, InlineInputThemeProps };
