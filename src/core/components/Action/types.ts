import { Core } from '@/types';

type ActionCSS = Record<'root' | 'spacer' | 'group', string>;

interface ActionBaseProps {
  variant?: 'default' | 'elevated' | undefined;
  className?: string | undefined;
}

interface ActionSharedProps extends ActionBaseProps {
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
  withTitle?: boolean | undefined;
}

interface ActionGroupProps extends ActionSharedProps {
  children?: React.ReactNode | undefined;
  orientation?: Core.Orientation | undefined;
}

interface ActionContext extends ActionSharedProps {
  getActionId: (v: string) => string;
  orientation: Core.Orientation;
  value?: string | undefined;
}

interface ActionRootProps extends ActionSharedProps {
  value?: string | undefined;
  icon?: React.ReactNode | undefined;
  label: string;
}

interface ActionSpacerProps extends ActionBaseProps {}

export type { ActionCSS, ActionContext, ActionRootProps, ActionGroupProps, ActionSpacerProps };
