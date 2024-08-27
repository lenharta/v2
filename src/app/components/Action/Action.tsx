import clsx from 'clsx';
import { Factory } from '@/types';
import { objectKeys } from '@/utils';
import { createFactory } from '@/factory';
import { Icon, IconProps } from '@/core';

const css = {
  root: 'v2-app-action',
};

export interface ActionProps {
  icon?: Partial<IconProps>;
}

export type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ActionProps;
  omits: 'children';
  comps: {};
}>;

const defaultIcon: Partial<IconProps> = {
  size: 'sm',
  fill: 'accent',
  type: 'outline',
  name: 'shape-circle',
  style: {},
  alpha: 1,
};

function parseActionIcon(icon?: Partial<IconProps>): IconProps {
  if (!icon) return {};

  return ((objectKeys(icon) || []) as (keyof IconProps)[]).reduce(
    (prev, key) => ({ ...prev, [key]: icon?.[key] || defaultIcon[key] }),
    {} as IconProps
  );
}

export const Action = createFactory<ActionFactory>((props, ref) => {
  const { className, icon, ...forwardedProps } = props;
  return (
    <button ref={ref} className={clsx(css.root, className)} {...forwardedProps}>
      <Icon {...parseActionIcon(icon)} />
    </button>
  );
});

Action.displayName = '@v2/App.Action';
