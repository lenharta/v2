import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { ActionSpacerProps } from '../Action.types';
import { useActionContext } from '../Action.context';

type ActionSpacerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'children';
  props: ActionSpacerProps;
}>;

const ActionSpacer = createFactory<ActionSpacerFactory>((props, ref) => {
  const { className, grow, ...forwardedProps } = props;

  const ctx = useActionContext();

  const contextProps = ctx
    ? {
        className: clsx(
          'v2-action-spacer',
          `v2-action-spacer--${ctx.variant || 'default-elevated'}`,
          className
        ),
      }
    : {};

  return <div ref={ref} data-grow={grow} {...contextProps} {...forwardedProps} />;
});

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
