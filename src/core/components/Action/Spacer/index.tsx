import clsx from 'clsx';
import { useActionContext } from '../context';

interface ActionSpacerProps {
  className?: string | undefined;
}

const ActionSpacer: React.FC<ActionSpacerProps> = (props) => {
  const { className } = props;
  const ctx = useActionContext();
  return (
    <div
      data-orientation={ctx.orientation}
      className={clsx('v2-action-spacer', className)}
      role="separator"
    />
  );
};

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer, type ActionSpacerProps };
