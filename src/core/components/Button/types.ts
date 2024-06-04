import { Core } from '@/types';

type ButtonCSS = Record<'root' | 'group' | 'label' | 'content', string>;

type ButtonTheme = 'default' | 'error' | 'warning' | 'success' | 'info';
type ButtonVariant = 'solid' | 'outlined' | 'tonal' | 'ghost' | 'skeleton' | 'text';

interface ButtonContext {
  size?: Core.Size | undefined;
  theme?: ButtonTheme | undefined;
  variant?: ButtonVariant | undefined;
  disabled?: boolean | undefined;
  orientation: Core.Orientation;
  getItemId: (id?: string | undefined) => string;
}

interface ButtonGroupProps {
  size?: Core.Size | undefined;
  theme?: ButtonTheme | undefined;
  variant?: ButtonVariant | undefined;
  disabled?: boolean | undefined;
  orientation?: Core.Orientation | undefined;
}

interface ButtonRootProps {
  size?: Core.Size | undefined;
  theme?: ButtonTheme | undefined;
  label?: string | undefined;
  variant?: ButtonVariant | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

export type { ButtonCSS, ButtonContext, ButtonRootProps, ButtonGroupProps };
