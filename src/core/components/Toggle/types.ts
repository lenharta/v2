import { Theme } from '@/types';
import { GroupProps, InlineInputProps } from '@/core';

interface ToggleThemeProps {
  size?: Theme.SizeRegular | undefined;
  variant?:
    | 'ghost'
    | 'default'
    | 'elevated'
    | 'ghost-accent'
    | 'default-accent'
    | 'elevated-accent'
    | undefined;
}

interface ToggleProps extends InlineInputProps, ToggleThemeProps {
  checked?: boolean | undefined;
  value?: string | undefined;
}

interface ToggleGroupProps extends GroupProps {
  onChange: (value: string[]) => void;
  value: string[];
}

interface ToggleContext extends GroupProps {
  onChange: (value: string[]) => void;
  value: string[];
}

export type { ToggleProps, ToggleGroupProps, ToggleContext, ToggleThemeProps };
