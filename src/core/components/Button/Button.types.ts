import { UnstyledButtonProps } from '@/core';

interface ButtonProps extends UnstyledButtonProps {
  'data-testid'?: string | undefined;
}

interface ButtonGroupProps {
  'data-testid'?: string | undefined;
}

export type { ButtonProps, ButtonGroupProps };
