import clsx from 'clsx';
import { Factory } from '@/types';
import { ButtonGroup } from './Group';
import { useButtonContext } from './Button.context';
import { ButtonCSS, ButtonRootProps } from './types';
import { Box, factory, UnstyledButton, useThemeClasses } from '@/core';

const css: Partial<ButtonCSS> = {
  root: 'v2-button',
  label: 'v2-button-label',
  content: 'v2-button-content',
};

const messages = {
  label: 'children provided may not be accessible, consider providing the `aria-label` attribute.',
};

type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ButtonRootProps;
  comps: {
    Group: typeof ButtonGroup;
  };
}>;

const defaultProps: Partial<ButtonRootProps> = {
  size: 'sm',
  scheme: 'default',
  variant: 'default',
};

const Button = factory<ButtonFactory>((props, ref) => {
  const {
    size,
    label,
    scheme,
    variant,
    disabled,
    children,
    className,
    leftContent,
    rightContent,
    ...forwardedProps
  } = props;

  if (typeof children !== 'string') {
    console.warn(['[@v2/core/Button]:', messages.label].join(' '));
  }

  const ctx = useButtonContext();

  const themeClasses = useThemeClasses({
    props: { size, scheme, variant },
    context: ctx ? { size: ctx.size, scheme: ctx.scheme, variant: ctx.variant } : null,
    prefix: css.root!,
    defaultProps,
    className,
  });

  // const schemeClassNames = ctx
  //   ? {
  //       [`${css.root}--size-${size}`]: !ctx.size,
  //       [`${css.root}--scheme-${scheme}`]: !ctx.scheme,
  //       [`${css.root}--variant-${variant}`]: !ctx.variant,
  //       [`${css.root}--size-${size}`]: !!ctx.size && size !== defaultProps.size,
  //       [`${css.root}--scheme-${scheme}`]: !!ctx.scheme && scheme !== defaultProps.scheme,
  //       [`${css.root}--variant-${variant}`]: !!ctx.variant && variant !== defaultProps.variant,
  //       [`${css.root}--size-${ctx.size}`]: !!ctx.size && size === defaultProps.size,
  //       [`${css.root}--scheme-${ctx.scheme}`]: !!ctx.scheme && scheme === defaultProps.scheme,
  //       [`${css.root}--variant-${ctx.variant}`]: !!ctx.variant && variant === defaultProps.variant,
  //     }
  //   : {
  //       [`${css.root}--size-${size}`]: size,
  //       [`${css.root}--scheme-${scheme}`]: scheme,
  //       [`${css.root}--variant-${variant}`]: variant,
  //     };

  const contextProps = ctx
    ? {
        id: ctx.getItemId(),
        'aria-disabled': ctx.disabled ?? disabled,
        'data-disabled': ctx.disabled ?? disabled,
      }
    : {
        id: forwardedProps.id,
        'aria-disabled': disabled,
        'data-disabled': disabled,
      };

  return (
    <UnstyledButton
      ref={ref}
      aria-label={label}
      className={themeClasses}
      {...forwardedProps}
      {...contextProps}
    >
      {leftContent && (
        <Box className={css.content} data-position="left">
          {leftContent}
        </Box>
      )}

      <Box className={css.label}>{label || children}</Box>

      {rightContent && (
        <Box className={css.content} data-position="right">
          {rightContent}
        </Box>
      )}
    </UnstyledButton>
  );
});

Button.Group = ButtonGroup;
Button.displayName = '@v2/Button';
export { Button };
