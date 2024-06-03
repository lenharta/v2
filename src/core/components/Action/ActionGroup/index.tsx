import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ActionProvider } from '../Action.context';
import { ActionGroupProps } from '../types';

const css = {
  groupBox: 'v2-action-group-box',
};

type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

const ActionGroup = factory<ActionGroupFactory>((props, ref) => {
  const {
    value,
    children,
    disabled,
    className,
    orientation = 'horizontal',
    ...forwardedProps
  } = props;

  const uid = React.useId();
  const getActionId = (v: string) => `action${uid}${v}:item`;

  return (
    <ActionProvider value={{ value, orientation, disabled, getActionId }}>
      <Box
        ref={ref}
        className={clsx(css.groupBox, className)}
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
type ActionGroupCSS = keyof typeof css;
export { ActionGroup, type ActionGroupProps, type ActionGroupCSS };
