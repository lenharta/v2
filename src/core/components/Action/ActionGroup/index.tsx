import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { ActionProvider } from '../Action.context';
import { factoryPolymorphic } from '@/core/factory';
import { ActionCSS, ActionGroupProps } from '../types';

const css: Partial<ActionCSS> = {
  group: 'v2-action-group',
};

type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

const ActionGroup = factoryPolymorphic<ActionGroupFactory>((props, ref) => {
  const {
    value,
    scheme,
    variant,
    children,
    disabled,
    className,
    orientation = 'horizontal',
    component: Component = 'div',
    ...forwardedProps
  } = props;

  const uid = React.useId();
  const getActionId = (v: string) => `action${uid}${v}:item`;

  return (
    <ActionProvider value={{ value, variant, scheme, orientation, disabled, getActionId }}>
      <Component
        ref={ref}
        className={clsx(css.group, className)}
        aria-orientation={orientation}
        data-orientation={orientation}
        data-core-action-group
        {...forwardedProps}
      >
        {children}
      </Component>
    </ActionProvider>
  );
});

ActionGroup.displayName = '@v2/Action.Group';
export { ActionGroup };
