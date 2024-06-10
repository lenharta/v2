import clsx from 'clsx';
import { Box } from '@/core';
import { useActionContext } from '../Action.context';
import { ActionCSS, ActionSpacerProps } from '../types';

const css: Partial<ActionCSS> = {
  spacer: 'v2-action-spacer',
};

type ActionSpacerFactory = React.FC<ActionSpacerProps>;

const ActionSpacer: ActionSpacerFactory = (props) => {
  const { scheme, variant, children, className, ...forwardedProps } = props;

  const ctx = useActionContext();

  return (
    <Box
      role="separator"
      className={clsx(css.spacer, className)}
      data-scheme={scheme ? scheme : ctx.scheme}
      data-variant={variant ? variant : ctx.variant}
      data-orientation={ctx.orientation}
      {...forwardedProps}
    >
      {children}
    </Box>
  );
};

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
