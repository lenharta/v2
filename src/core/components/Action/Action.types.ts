import { Core } from '@/types';

interface ActionProps {
  label: string;
  icon?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
}

interface ActionSpacerProps {
  className?: string | undefined;
}

interface ActionGroupProps {
  value?: string | undefined;
  disabled?: boolean | undefined;
  orientation?: Core.Orientation | undefined;
}

interface ActionContext {
  value?: string | undefined;
  disabled?: boolean | undefined;
  orientation?: Core.Orientation;
  getActionId: () => string;
}

export type { ActionProps, ActionSpacerProps, ActionGroupProps, ActionContext };
