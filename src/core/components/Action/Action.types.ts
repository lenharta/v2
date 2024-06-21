import { Theme } from '@/types';
import { GroupProps, IconProps } from '@/core';

type ActionSize = 'default' | Theme.SizeRegular;
type ActionRadius = 'default' | Theme.SizeRegular;
type ActionVariant = 'default' | 'elevated' | 'accent' | 'accent-elevated';

interface ActionThemeProps {
  size?: ActionSize | undefined;
  radius?: ActionRadius | undefined;
  variant?: ActionVariant | undefined;
}

interface ActionProps extends ActionThemeProps {
  icon?: IconProps['name'] | undefined;
  value?: string | number | readonly string[] | undefined;
  label?: string | undefined;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  selected?: boolean | undefined;
}

interface ActionSpacerProps extends ActionThemeProps {
  grow?: boolean | undefined;
}

interface ActionGroupProps extends ActionThemeProps, GroupProps {
  icon?: IconProps['name'] | undefined;
  value?: string | number | readonly string[] | undefined;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
}

interface ActionContextValue extends ActionThemeProps, GroupProps {
  icon?: IconProps['name'] | undefined;
  value?: string | number | readonly string[] | undefined;
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
}

export type {
  ActionSize,
  ActionRadius,
  ActionVariant,
  ActionProps,
  ActionSpacerProps,
  ActionGroupProps,
  ActionContextValue,
};
