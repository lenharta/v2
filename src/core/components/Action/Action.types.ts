import { GroupProps, IconProps, UnstyledButtonProps } from '@/core';

interface ActionContextValue {
  variant?: 'default' | 'accent' | undefined;
  navigate?: ((to: string) => void) | void;
}

interface ActionProps extends UnstyledButtonProps {
  label: string;
  icon?: IconProps['name'] | undefined;
  variant?: 'default' | 'accent';
  navigate?: ((to: string) => void) | void;
  'data-testid'?: string | undefined;
}

interface ActionGroupProps extends GroupProps {
  icon?: IconProps['name'] | undefined;
  variant?: 'default' | 'accent';
  navigate?: ((to: string) => void) | void;
  'data-testid'?: string | undefined;
}

interface ActionSpacerProps {
  grow?: boolean | undefined;
}

export type { ActionProps, ActionGroupProps, ActionSpacerProps, ActionContextValue };
