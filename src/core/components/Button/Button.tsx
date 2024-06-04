// import clsx from 'clsx';
// import { Factory } from '@/types';
// import { ButtonGroup } from './Group';
// import { ButtonProps } from './Button.types';
// import { UnstyledButton } from '@/core/components/UnstyledButton';
// import { factoryPolymorphic } from '@/core/factory';

import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { Box, factory, UnstyledButton } from '@/core';
import { ButtonGroup } from './Group';
import { useButtonContext } from './Button.context';
import { ButtonCSS, ButtonRootProps } from './types';

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
  theme: 'default',
  variant: 'solid',
};

const Button = factory<ButtonFactory>((props, ref) => {
  const {
    size = defaultProps.size,
    theme = defaultProps.theme,
    label,
    variant = defaultProps.variant,
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

  const themeClassNames = ctx
    ? {
        [`${css.root}--${size}`]: !!ctx.size && size !== defaultProps.size,
        [`${css.root}--${theme}`]: !!ctx.theme && theme !== defaultProps.theme,
        [`${css.root}--${variant}`]: !!ctx.variant && variant !== defaultProps.variant,
        [`${css.root}--${ctx.size}`]: !!ctx.size && size === defaultProps.size,
        [`${css.root}--${ctx.theme}`]: !!ctx.theme && theme === defaultProps.theme,
        [`${css.root}--${ctx.variant}`]: !!ctx.variant && variant === defaultProps.variant,
      }
    : {
        [`${css.root}--${size}`]: size,
        [`${css.root}--${theme}`]: theme,
        [`${css.root}--${variant}`]: variant,
      };

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
      className={clsx(css.root, themeClassNames, className)}
      aria-label={label}
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
