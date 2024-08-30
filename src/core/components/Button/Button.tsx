import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { createFactory } from '@/factory';
import { createEventCallback } from '@/utils';
import { Icon, UnstyledButton } from '@/core';
import { ButtonGroup } from './ButtonGroup';
import { useButtonContext } from './ButtonContext';

export type ButtonComponents = {
  Group: typeof ButtonGroup;
};

export type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  props: Core.ButtonProps;
  comps: ButtonComponents;
  comp: 'button';
}>;

const css: Record<'root' | 'label' | 'layout' | 'section', string> = {
  root: 'v2-button',
  label: 'v2-button-label',
  layout: 'v2-button-layout',
  section: 'v2-button-section',
};

export const Button = createFactory<ButtonFactory>((props, ref) => {
  const {
    size = 'md',
    value,
    variant = 'default',
    loading,
    disabled,
    readOnly,
    selected,
    children,
    iconLeft,
    fullWidth,
    iconRight,
    className,
    onChange,
    ...forwardedProps
  } = props;

  const context = useButtonContext();

  const contextClassNames = context
    ? [`${css.root}--${size || context.size}`, `${css.root}--${variant || context.variant}`]
    : [];

  const handleChange = () => {
    if (
      !(loading || context.loading) &&
      !(readOnly || context.readOnly) &&
      !(disabled || context.disabled)
    ) {
      if (!value || !context.value) {
        console.error('[@/core/Action]: A value must be provided to Action -or- Action.Context');
      } else {
        context.onValueChange?.(value || context.value);
      }
    }
  };

  const contextProps = context
    ? {
        selected: selected || value === context.value || undefined,
        disabled: disabled || context.disabled || undefined,
        readOnly: readOnly || context.readOnly || undefined,
        loading: loading || context.loading || undefined,
        'aria-orientation': context.orientation,
        'data-orientation': context.orientation,
        'data-block': fullWidth || context.fullWidth || undefined,
      }
    : {
        selected: selected || undefined,
        disabled: disabled || undefined,
        readOnly: readOnly || undefined,
        loading: loading || undefined,
        'data-block': fullWidth || undefined,
      };

  return (
    <UnstyledButton
      {...forwardedProps}
      {...contextProps}
      className={clsx(css.root, ...contextClassNames, className)}
      onChange={createEventCallback(onChange, handleChange)}
      ref={ref}
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
