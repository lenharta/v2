import { GroupProps, UnstyledButtonProps } from '@/core';

interface ChipProps extends UnstyledButtonProps {
  'data-testid'?: string | undefined;
}

interface ChipGroupProps extends GroupProps {
  'data-testid'?: string | undefined;
}

export type { ChipProps, ChipGroupProps };
