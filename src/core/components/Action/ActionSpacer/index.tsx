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
  ({ variant = 'default', size = 'md', className, grow, ...props }, ref) => {
    const context = useActionContext();

    const dataProps = { 'data-grow': !!grow };

    const classNames = clsx(
      'v2-action-spacer',
      `v2-action-spacer--${context.size || size}`,
      `v2-action-spacer--${context.variant || variant}`,
      className
    );

    return <div {...props} {...dataProps} className={classNames} ref={ref} />;
  }
);

ActionSpacer.displayName = '@v2/Action.Spacer';
