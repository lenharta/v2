import { Theme } from '@/types';

type ButtonCSS = Record<'root' | 'group' | 'label' | 'content', string>;
type ButtonScheme = 'default' | 'contrast' | 'accent' | Theme.Color;
type ButtonVariant = 'default' | 'elevated';

interface ButtonThemeProps {
  size?: Theme.Size | undefined;
  scheme?: ButtonScheme | undefined;
  variant?: ButtonVariant | undefined;
}

interface ButtonContext extends ButtonThemeProps {
  disabled?: boolean | undefined;
  orientation: Theme.Orientation;
  getItemId: (id?: string | undefined) => string;
}

interface ButtonGroupProps extends ButtonThemeProps {
  disabled?: boolean | undefined;
  orientation?: Theme.Orientation | undefined;
}

interface ButtonRootProps extends ButtonThemeProps {
  label?: string | undefined;
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
  ButtonThemeProps,
};
