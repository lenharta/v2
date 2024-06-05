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
    prefix: css.root!,
    props: { size, scheme, variant },
    context: { size: ctx?.size, scheme: ctx?.scheme, variant: ctx?.variant },
    defaultProps: { size: 'sm', scheme: 'default', variant: 'default' },
    className,
  });

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
