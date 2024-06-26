import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { Icon, UnstyledButton } from '@/core';
import { IconButtonProps } from './IconButton.types';

type IconButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: IconButtonProps;
}>;

const IconButton = factory<IconButtonFactory>((props, ref) => {
  const {
    icon,
    type,
    size = 'xs',
    radius,
    accent,
    variant = 'default',
    loading,
    disabled,
    readOnly,
    selected,
    className,
    ...forwardedProps
  } = props;

  return (
    <UnstyledButton
      ref={ref}
      loading={loading}
      selected={selected}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx(
        'v2-icon-button',
        { [`v2-icon-button--${variant}`]: variant },
        { [`v2-icon-button--size-${size}`]: size },
        { [`v2-icon-button--radius-${radius}`]: radius },
        className
      )}
      {...forwardedProps}
    >
      <Icon name={icon} type={type} accent={accent} size={size} />
    </UnstyledButton>
  );
});

IconButton.displayName = '@v2/IconButton';
export { IconButton };
