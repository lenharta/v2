import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { mergeProps } from '@/core/utils';
import { useActionContext } from '../ActionContext';

export type ActionSpacerFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ActionSpacerProps;
  excluded: 'children';
  element: 'div';
}>;

export const ActionSpacer = Component<ActionSpacerFactory>((props, ref) => {
  const context = useActionContext();

  const { variant, className, grow, ...otherProps } = mergeProps(props, context, {
    variant: 'default',
  });

  const dataProps = { 'data-grow': !!grow };

  const classNames = clsx('v2-action-spacer', `v2-action-spacer--${variant}`, className);

  return <div {...otherProps} {...dataProps} className={classNames} ref={ref} />;
});

ActionSpacer.displayName = '@v2/Action.Spacer';
