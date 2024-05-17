import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { ActionProvider } from '../context';

interface ActionGroupProps {
  value?: string | undefined;
  disabled?: boolean | undefined;
  orientation?: Core.Orientation | undefined;
}

type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

const ActionGroup = factory<ActionGroupFactory>((props, ref) => {
  const { value, className, disabled, orientation = 'horizontal', ...forwardedProps } = props;

  const uid = React.useId();
  const getActionId = () => `action${uid}item`;

  return (
    <ActionProvider value={{ value, orientation, disabled, getActionId }}>
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
