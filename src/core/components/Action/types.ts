import { Core, Theme } from '@/types';
import React from 'react';

type ActionCSS = Record<'root' | 'spacer' | 'group', string>;
type ActionScheme = 'default' | 'accent' | Theme.Color;
type ActionVariant = 'default' | 'elevated';

interface ActionGroupProps {
  value?: string | undefined;
  scheme?: ActionScheme | undefined;
  variant?: ActionVariant | undefined;
  className?: string | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  withTitle?: boolean | undefined;
  children?: React.ReactNode | undefined;
  orientation?: Core.Orientation | undefined;
}

interface ActionContext {
  scheme?: ActionScheme | undefined;
  variant?: ActionVariant | undefined;
  className?: string | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  withTitle?: boolean | undefined;
  getActionId: (v: string) => string;
  orientation: Core.Orientation;
  value?: string | undefined;
}

interface ActionRootProps {
  scheme?: ActionScheme | undefined;
  variant?: ActionVariant | undefined;
  className?: string | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  withTitle?: boolean | undefined;
  value?: string | undefined;
  icon?: React.ReactNode | undefined;
  label: string;
}

interface ActionSpacerProps {
  scheme?: ActionScheme | undefined;
  variant?: ActionVariant | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type {
  ActionCSS,
  ActionScheme,
  ActionVariant,
  ActionContext,
  ActionRootProps,
  ActionGroupProps,
  ActionSpacerProps,
};
