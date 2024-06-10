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

  const getStaticScheme = () => {
    const filter = '-interactive';
    const input = scheme ?? ctx.scheme ?? 'primary-1';
    return input.replace(filter, '');
  };

  return (
    <Box
      role="separator"
      className={clsx(css.spacer, className)}
      data-orientation={ctx.orientation}
      data-variant={variant ? variant : ctx.variant}
      data-scheme={getStaticScheme()}
      {...forwardedProps}
    >
      {children}
    </Box>
  );
};

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
