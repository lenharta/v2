import clsx from 'clsx';
import { Box } from '@/core';
import { useActionContext } from '../Action.context';
import { ActionCSS, ActionSpacerProps } from '../types';

const css: Partial<ActionCSS> = {
  spacer: 'v2-action-spacer',
};

type ActionSpacerFactory = React.FC<ActionSpacerProps>;

const ActionSpacer: ActionSpacerFactory = (props) => {
  const { className, variant, children, ...forwardedProps } = props;

  const ctx = useActionContext();

  const classNames = clsx(
    css.spacer,
    {
      [`${css.spacer}--${variant}`]: variant && !ctx.variant,
      [`${css.spacer}--${ctx.variant}`]: ctx.variant,
    },
    className
  );

  const contextProps = ctx
    ? {
        'data-orienation': ctx.orientation,
      }
    : {};

  return (
    <Box role="separator" className={classNames} {...forwardedProps} {...contextProps}>
      {children}
    </Box>
  );
};

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
