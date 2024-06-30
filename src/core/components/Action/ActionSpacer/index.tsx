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

  const contextProps = ctx
    ? {
        className: clsx('v2-action-spacer', className),
      }
    : {};

  return <div ref={ref} data-grow={grow} {...contextProps} {...forwardedProps} />;
});

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
