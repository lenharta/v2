import React from 'react';
import { Theme } from '@/types';

type CheckboxCSS = Record<
  'root' | 'copy' | 'input' | 'label' | 'error' | 'message' | 'group',
  string
>;

type CheckboxStatus = 'true' | 'false' | 'mixed';
type CheckboxScheme = 'default' | 'accent' | Theme.Color;
type CheckboxVariant = 'default' | 'elevated';

interface CheckboxThemeProps {
  size?: Theme.Size | undefined;
  scheme?: CheckboxScheme | undefined;
  variant?: CheckboxVariant | undefined;
}

interface CheckboxCopyProps extends CheckboxThemeProps {
  message?: string | undefined;
  error?: string | undefined;
  label: string;
}

interface CheckboxRootProps extends CheckboxThemeProps {
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  rootRef?: React.MutableRefObject<HTMLDivElement>;
  indeterminate?: boolean | undefined;
  message?: string | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  checked?: boolean | undefined;
  value?: string | undefined;
  error?: string | undefined;
  label: string;
}

interface CheckboxGroupProps extends CheckboxThemeProps {
  onChange: (value: string[]) => void;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  orientation?: Theme.Orientation | undefined;
  value: string[];
  id: string | undefined;
}

interface CheckboxContext extends CheckboxThemeProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getItemId: (value: string) => void;
  getGroupId: () => void;
  orientation: Theme.Orientation;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  value: string[];
}

export type {
  CheckboxCSS,
  CheckboxStatus,
  CheckboxScheme,
  CheckboxVariant,
  CheckboxThemeProps,
  CheckboxCopyProps,
  CheckboxRootProps,
  CheckboxGroupProps,
  CheckboxContext,
};
