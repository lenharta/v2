import clsx from 'clsx';
import * as React from 'react';
import { Box } from '@/core/Box';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { ActionGroupContextValue, ActionGroupProvider } from '@/core/Action/context';

export interface ActionGroupProps extends Core.GroupProps, ActionGroupContextValue {}

export type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

export const ActionGroup = factory<ActionGroupFactory>((props, ref) => {
  const {
    size,
    variant,
    disabled,
    children,
    className,
    orientation = 'horizontal',
    ...otherProps
  } = props;

  const a11yProps = {
    'aria-orientation': orientation,
  };

  return (
    <Box
      {...otherProps}
      {...a11yProps}
      className={clsx('button-group', className)}
      role="group"
      ref={ref}
    >
      <ActionGroupProvider value={{ size, variant, disabled }}>
        <React.Fragment>{children}</React.Fragment>
      </ActionGroupProvider>
    </Box>
  );
});

ActionGroup.displayName = '@v2/core/Action.Group';
