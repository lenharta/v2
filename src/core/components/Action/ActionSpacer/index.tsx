import clsx from 'clsx';
import { Box } from '@/core/components';
import { useActionContext } from '../Action.context';
import { ActionSpacerProps } from '../Action.types';

const css = {
  spacerBox: 'v2-action-spacer-box',
};

type ActionSpacerFactory = React.FC<ActionSpacerProps>;

const ActionSpacer: ActionSpacerFactory = (props) => {
  const { className, ...forwardedProps } = props;

  const ctx = useActionContext();

  const contextProps = ctx
    ? {
        'data-orienation': ctx.orientation,
      }
    : {};

  return (
    <Box
      role="separator"
      className={clsx(css.spacerBox, className)}
      {...forwardedProps}
      {...contextProps}
    />
  );
};

ActionSpacer.displayName = '@v2/Action.Spacer';
type ActionSpacerCSS = keyof typeof css;
export { ActionSpacer, type ActionSpacerProps, type ActionSpacerCSS };
