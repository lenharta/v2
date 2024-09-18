import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { useActionContext } from '../ActionContext';

export type ActionSpacerFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ActionSpacerProps;
  excluded: 'children';
  element: 'div';
}>;

export const ActionSpacer = Component<ActionSpacerFactory>(
  ({ variant, size, className, grow, ...props }, ref) => {
    const context = useActionContext();
    return (
      <div
        {...props}
        ref={ref}
        data-gow={!!grow}
        className={clsx(
          'v2-action-spacer',
          `v2-action-spacer--${context.size || size || 'sm'}`,
          `v2-action-spacer--${context.variant || variant || 'default'}`,
          className
        )}
      />
    );
  }
);

ActionSpacer.displayName = '@v2/Action.Spacer';
