import React from 'react';
import { Theme } from '@/types';

interface ActionGroupProps {
  value?: string | undefined;
  scheme?: Theme.Scheme | undefined;
  variant?: 'default' | 'elevated' | undefined;
  className?: string | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  withTitle?: boolean | undefined;
  children?: React.ReactNode | undefined;
  orientation?: Theme.Orientation | undefined;
  loopFocus?: boolean | undefined;
  childSelector?: string | undefined;
  parentSelector?: string | undefined;
}

interface ActionContext {
  scheme?: Theme.Scheme | undefined;
  variant?: 'default' | 'elevated' | undefined;
  className?: string | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  withTitle?: boolean | undefined;
  getActionId: (v: string) => string;
  orientation: Theme.Orientation;
  value?: string | undefined;
  parentSelector: string;
  childSelector: string;
  loopFocus: boolean;
}

interface ActionProps {
  scheme?: Theme.Scheme | undefined;
  variant?: 'default' | 'elevated' | undefined;
  className?: string | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  withTitle?: boolean | undefined;
  value?: string | undefined;
  icon?: React.ReactNode | undefined;
  label: string;
}

interface ActionSpacerProps {
  scheme?: Theme.Scheme | undefined;
  variant?: 'default' | 'elevated' | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type { ActionContext, ActionProps, ActionGroupProps, ActionSpacerProps };
