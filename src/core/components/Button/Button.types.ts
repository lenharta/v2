import { Core } from '@/types';

interface ButtonContext {
  size?: Core.Size | undefined;
  orientation?: Core.Orientation | undefined;
}

interface ButtonGroupProps {
  size?: Core.Size | undefined;
  orientation?: Core.Orientation | undefined;
}

interface ButtonProps {
  size?: Core.Size | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

export type { ButtonProps, ButtonGroupProps, ButtonContext };
