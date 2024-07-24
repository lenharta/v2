import React from 'react';
import { Theme } from '@types';
import { UnstyledButtonProps, GroupProps } from '@core';

interface ChipThemeProps {
  size?: Theme.SizeRegular | undefined;
  variant?: Theme.Variant | undefined;
}

interface ChipProps extends UnstyledButtonProps, ChipThemeProps {
  value?: React.JSX.IntrinsicElements['button']['value'] | undefined;
  onChange?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

interface ChipGroupProps extends GroupProps, ChipThemeProps {
  value?: string | readonly string[] | undefined;
  onChange?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  loading?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
}

interface ChipContext extends GroupProps, ChipThemeProps {
  value?: string | readonly string[] | undefined;
  onChange?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  loading?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
}

export type { ChipProps, ChipGroupProps, ChipContext };
