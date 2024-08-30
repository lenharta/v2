import clsx from 'clsx';

import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { mergeProps } from '@/core/utils';
import { Icon, UnstyledButton } from '@/core/components';

import { ButtonIconProps, ButtonProps } from './types';
import { ButtonGroup } from './ButtonGroup';
import { useButtonContext } from './context';

type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof UnstyledButton;
  props: ButtonProps;
  comps: {
    Group: typeof ButtonGroup;
  };
}>;

const css = {
  root: 'v2-button',
  label: 'v2-button-label',
  layout: 'v2-button-layout',
  section: 'v2-button-section',
};

const defaultProps: ButtonProps = {
  size: 'sm',
  align: 'center',
  justify: 'center',
  variant: 'default',
};

const Button = createFactory<ButtonFactory>((props, ref) => {
  const context = useButtonContext();

  const {
    size,
    align,
    value,
    justify,
    variant,
    loading,
    disabled,
    readOnly,
    selected,
    children,
    iconLeft,
    fullWidth,
    iconRight,
    className,
    ...forwardedProps
  } = mergeProps(props, defaultProps, context);

  const contextProps = context
    ? {
        'data-orientation': context.orientation,
        'aria-orientation': context.orientation,
      }
    : {};

  return (
    <UnstyledButton
      {...forwardedProps}
      {...contextProps}
      ref={ref}
      loading={loading}
      readOnly={readOnly}
      disabled={disabled}
      selected={selected}
      data-block={fullWidth}
      className={clsx(
        css.root,
        `${css.root}--${size}`,
        `${css.root}--${align}`,
        `${css.root}--${justify}`,
        `${css.root}--${variant}`,
        className
      )}
    >
      <span className={css.layout}>
        {iconLeft && (
          <div className={css.section} data-position="left">
            <Icon {...iconLeft} />
          </div>
        )}

        {children && (
          <div className={css.label} data-loading={loading}>
            {children}
          </div>
        )}

        {iconRight && (
          <div className={css.section} data-position="right">
            <Icon {...iconRight} />
          </div>
        )}
      </span>
    </UnstyledButton>
  );
});

Button.Group = ButtonGroup;
Button.displayName = '@v2/Button';
export { Button };
