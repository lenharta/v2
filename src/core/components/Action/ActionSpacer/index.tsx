import clsx from 'clsx';
import { Box } from '@/core';
import { css } from '../action-constants';
import { useActionContext } from '../action-context';
import { ActionSpacerProps } from '../action-types';

type ActionSpacerFactory = React.FC<ActionSpacerProps>;

const ActionSpacer: ActionSpacerFactory = (props) => {
  const { scheme, variant, children, className, ...forwardedProps } = props;

  const ctx = useActionContext();

  const contextProps = ctx
    ? {
        className: clsx(
          css.spacer,
          `${css.spacer}--scheme-${scheme || ctx.scheme}`,
          `${css.spacer}--variant-${variant || ctx.variant}`,
          className
        ),
      }
    : {};

  return (
    <Box
      role="separator"
      className={clsx(
        css.spacer,
        `${css.spacer}--scheme-${scheme}`,
        `${css.spacer}--variant-${variant}`,
        className
      )}
      data-orientation={ctx.orientation}
      {...forwardedProps}
      {...contextProps}
    >
      {children}
    </Box>
  );
};

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
