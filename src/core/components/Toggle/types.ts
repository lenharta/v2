import { Theme } from '@types';
import { GroupProps, InlineInputProps } from '@core';

interface ToggleThemeProps {
  size?: Theme.SizeRegular | undefined;
  variant?: Theme.Variant | undefined;
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
