import { Core } from '@/types';

interface ButtonContext {
  orientation?: Core.Orientation;
}

interface ButtonGroupProps {
  orientation?: Core.Orientation;
}

interface ButtonProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export type { ButtonProps, ButtonGroupProps, ButtonContext };
