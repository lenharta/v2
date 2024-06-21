import { GroupProps, UnstyledButtonProps } from '@/core';
import { Theme } from '@/types';

interface ButtonContextValue {
  size?: Theme.SizeCompact | undefined;
  variant?: 'default' | 'accent' | undefined;
}

interface ButtonProps extends UnstyledButtonProps {
  size?: Theme.SizeCompact | undefined;
  variant?: 'default' | 'accent' | undefined;
  'data-testid'?: string | undefined;
}

interface ButtonGroupProps extends GroupProps {
  size?: Theme.SizeCompact | undefined;
  variant?: 'default' | 'accent' | undefined;
  'data-testid'?: string | undefined;
}

export type { ButtonContextValue, ButtonProps, ButtonGroupProps };
