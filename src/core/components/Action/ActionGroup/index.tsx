import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ActionProvider } from '../Action.context';
import { ActionCSS, ActionGroupProps } from '../types';

const css: Partial<ActionCSS> = {
  group: 'v2-action-group',
};

type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

const ActionGroup = factory<ActionGroupFactory>((props, ref) => {
  const {
    value,
    variant = 'default',
    children,
    disabled,
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  const uid = React.useId();
  const getActionId = (v: string) => `action${uid}${v}:item`;

  return (
    <ActionProvider value={{ value, variant, orientation, disabled, getActionId }}>
      <Box
        ref={ref}
        className={clsx(css.group, className)}
        aria-orientation={orientation}
        data-orientation={orientation}
        data-core-action-group
        {...forwardedProps}
      >
        {children}
      </Box>
    </ActionProvider>
  );
});

ActionGroup.displayName = '@v2/Action.Group';
export { ActionGroup };
