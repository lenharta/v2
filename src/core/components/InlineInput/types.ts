import { UnstyledButtonProps } from '@/core';

interface InlineInputThemeProps {}

interface InlineInputProps extends UnstyledButtonProps, InlineInputThemeProps {
  label?: string | undefined;
  error?: string | undefined;
  status?: 'idle' | 'warning' | 'success' | 'error' | 'danger' | undefined;
  checked?: boolean | undefined;
  message?: string | undefined;
}

export type { InlineInputProps, InlineInputThemeProps };
