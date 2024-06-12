import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core';

import { css } from '../action-constants';
import { ActionProvider } from '../action-context';
import { ActionGroupProps } from '../action-types';

type ActionGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionGroupProps;
}>;

const defaultProps: Partial<ActionGroupProps> = {
  scheme: 'primary-1-interactive',
  variant: 'elevated',
};

const ActionGroup = factoryPolymorphic<ActionGroupFactory>((props, ref) => {
  const {
    value,
    scheme = defaultProps.scheme,
    variant = defaultProps.variant,
    children,
    disabled,
    className,
    loopFocus = false,
    childSelector = '[data-core-action-item]',
    parentSelector = '[data-core-action-group]',
    orientation = 'horizontal',
    component: Component = 'div',
    ...forwardedProps
  } = props;

  const uid = React.useId();
  const getActionId = (v: string) => `action${uid}${v}:item`;

  return (
    <ActionProvider
      value={{
        value,
        scheme,
        variant,
        disabled,
        loopFocus,
        orientation,
        childSelector,
        parentSelector,
        getActionId,
      }}
    >
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
