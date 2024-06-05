import clsx from 'clsx';
import { Box } from '@/core';
import { useActionContext } from '../Action.context';
import { ActionCSS, ActionSpacerProps } from '../types';

const css: Partial<ActionCSS> = {
  spacer: 'v2-action-spacer',
};

type ActionSpacerFactory = React.FC<ActionSpacerProps>;

const defaultProps: Partial<ActionSpacerProps> = {
  scheme: 'default',
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

  const contextClasses = {
    [`${css.spacer}--scheme-${scheme}`]: !ctx.scheme && scheme,
    [`${css.spacer}--variant-${variant}`]: !ctx.variant && scheme,
    [`${css.spacer}--scheme-${scheme}`]: !!ctx.scheme && scheme !== defaultProps.scheme,
    [`${css.spacer}--variant-${variant}`]: !!ctx.variant && variant !== defaultProps.variant,
    [`${css.spacer}--scheme-${ctx.scheme}`]: !!ctx.scheme && scheme === defaultProps.scheme,
    [`${css.spacer}--variant-${ctx.variant}`]: !!ctx.variant && variant === defaultProps.variant,
  };

  const schemeClassNames = ctx
    ? contextClasses
    : {
        [`${css.spacer}--scheme-${scheme}`]: scheme,
        [`${css.spacer}--variant-${variant}`]: variant,
      };

  const contextProps = ctx
    ? {
        'data-orienation': ctx.orientation,
      }
    : {};

  return (
    <Box
      role="separator"
      className={clsx(css.spacer, schemeClassNames, className)}
      {...forwardedProps}
      {...contextProps}
    >
      {children}
    </Box>
  );
};

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer };
