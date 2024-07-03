import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { useActionContext } from '../context';
import { ActionSpacerProps } from '../types';

type ActionSpacerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'children';
  props: ActionSpacerProps;
}>;

const ActionSpacer = createFactory<ActionSpacerFactory>((props, ref) => {
  const { className, grow, ...forwardedProps } = props;

  const ctx = useActionContext();

  return (
    <div
      ref={ref}
      data-grow={grow}
      className={clsx(
        'v2-action-spacer',
        `v2-action-spacer--${ctx.variant || 'base-elevated'}`,
        className
      )}
      {...forwardedProps}
    />
  );
});

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
