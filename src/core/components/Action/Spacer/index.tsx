import clsx from 'clsx';
import { useActionContext } from '../Action.context';
import { ActionSpacerProps } from '../Action.types';

const ActionSpacer: React.FC<ActionSpacerProps> = (props) => {
  const { className, ...forwardedProps } = props;
  const ctx = useActionContext();
  return (
    <div
      {...forwardedProps}
      data-orientation={ctx.orientation}
      className={clsx('v2-action-spacer', className)}
      role="separator"
    />
  );
};

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer, type ActionSpacerProps };
