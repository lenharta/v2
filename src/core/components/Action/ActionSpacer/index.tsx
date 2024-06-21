import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../../factory';
import { ActionSpacerProps } from '../Action.types';

type ActionSpacerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ActionSpacerProps;
  omits: 'children';
}>;

const ActionSpacer = factory<ActionSpacerFactory>((props, ref) => {
  const { className, grow, ...forwardedProps } = props;
  return (
    <div
      ref={ref}
      className={clsx('v2-action-spacer', className)}
      data-grow={grow}
      {...forwardedProps}
    />
  );
});

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
