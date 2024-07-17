import { UnstyledButtonProps, GroupProps } from '@core';

interface ChipThemeProps {}

interface ChipProps extends UnstyledButtonProps, ChipThemeProps {}

interface ChipGroupProps extends GroupProps, ChipThemeProps {}

interface ChipContext {}

export type { ChipProps, ChipGroupProps, ChipContext };
