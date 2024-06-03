import { Core } from '@/types';

interface ActionBaseProps {
  className?: string | undefined;
}

interface ActionSharedProps extends ActionBaseProps {
  elevated?: boolean | undefined;
  selected?: boolean | undefined;
  disabled?: boolean | undefined;
  withTitle?: boolean | undefined;
}

interface ActionContext extends ActionSharedProps {
  value?: string | undefined;
  orientation?: Core.Orientation;
  getActionId: (v: string) => string;
}

interface ActionGroupProps extends ActionSharedProps {
  value?: string | undefined;
  orientation?: Core.Orientation | undefined;
}

interface ActionRootProps extends ActionSharedProps {
  icon?: React.ReactNode | undefined;
  value: string;
  label: string;
}

interface ActionSpacerProps extends ActionBaseProps {
  className?: string | undefined;
}

type ActionRootClassNames = 'root' | 'inner';
type ActionGroupClassNames = 'root';
type ActionSpacerClassNames = 'root';

type ActionRootCSS = Record<ActionRootClassNames, string>;
type ActionGroupCSS = Record<ActionGroupClassNames, string>;
type ActionSpacerCSS = Record<ActionSpacerClassNames, string>;

export type {
  ActionContext,
  ActionRootProps,
  ActionGroupProps,
  ActionSpacerProps,
  ActionRootCSS,
  ActionGroupCSS,
  ActionSpacerCSS,
  ActionRootClassNames,
  ActionGroupClassNames,
  ActionSpacerClassNames,
};
