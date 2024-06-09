import clsx from 'clsx';
import { Box } from '@/core';
import { useActionContext } from '../Action.context';
import { ActionCSS, ActionSpacerProps } from '../types';

const css: Partial<ActionCSS> = {
  spacer: 'v2-action-spacer',
};

type ActionSpacerFactory = React.FC<ActionSpacerProps>;

const defaultProps: Partial<ActionSpacerProps> = {
  scheme: 'primary-interactive',
  variant: 'default',
};

const ActionSpacer: ActionSpacerFactory = (props) => {
  const {
    scheme = defaultProps.scheme,
    variant = defaultProps.variant,
    children,
    className,
    ...forwardedProps
  } = props;

  const ctx = useActionContext();

  const contextProps = ctx
    ? {
        'data-orienation': ctx.orientation,
        'data-variant': ctx.variant,
        'data-scheme': ctx.scheme,
      }
    : {};

  return (
    <Box
      role="separator"
      data-scheme={scheme}
      data-variant={variant}
      className={clsx(css.spacer, className)}
      {...forwardedProps}
      {...contextProps}
    >
      {children}
    </Box>
  );
};

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
