import { Core } from '@/types';

interface InlineInputProps {
  icon?: React.ReactNode;
  value: string;
  label: string;
  error?: string | undefined;
  message?: string | undefined;
  disabled?: boolean | undefined;
  iconPosition?: Core.Align | undefined;
}

export type { InlineInputProps };
