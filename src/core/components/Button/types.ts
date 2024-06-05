import { Core, Theme } from '@/types';

type ButtonCSS = Record<'root' | 'group' | 'label' | 'content', string>;
type ButtonScheme = 'default' | 'contrast' | 'accent' | Theme.Color;
type ButtonVariant = 'default' | 'elevated';

interface ButtonContext {
  size?: Core.Size | undefined;
  scheme?: ButtonScheme | undefined;
  variant?: ButtonVariant | undefined;
  disabled?: boolean | undefined;
  orientation: Core.Orientation;
  getItemId: (id?: string | undefined) => string;
}

interface ButtonGroupProps {
  size?: Core.Size | undefined;
  scheme?: ButtonScheme | undefined;
  variant?: ButtonVariant | undefined;
  disabled?: boolean | undefined;
  orientation?: Core.Orientation | undefined;
}

interface ButtonRootProps {
  size?: Core.Size | undefined;
  scheme?: ButtonScheme | undefined;
  label?: string | undefined;
  variant?: ButtonVariant | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

export type {
  ButtonCSS,
  ButtonScheme,
  ButtonVariant,
  ButtonContext,
  ButtonRootProps,
  ButtonGroupProps,
};
