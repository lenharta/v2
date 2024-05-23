import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { ActionProvider } from '../Action.context';
import { ActionGroupProps } from '../Action.types';

type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

const ActionGroup = factory<ActionGroupFactory>((props, ref) => {
  const { value, className, disabled, orientation = 'horizontal', ...forwardedProps } = props;

  const uid = React.useId();

  return (
    <ActionProvider value={{ value, orientation, disabled, getActionId: () => `action${uid}item` }}>
      <Box
        {...forwardedProps}
        className={clsx('v2-action-group', className)}
        data-orientation={orientation}
        aria-orientation={orientation}
        ref={ref}
      />
    </ActionProvider>
  );
});

ActionGroup.displayName = '@v2/Action.Group';
export { ActionGroup, type ActionGroupProps };
