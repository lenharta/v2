import clsx from 'clsx';
import { Factory } from '@/types';
import { IconButtonProps } from './IconButton.types';
import { factory, Icon, UnstyledButton } from '@/core';

type IconButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: IconButtonProps;
  omits: 'children';
}>;

const IconButton = factory<IconButtonFactory>((props, ref) => {
  const {
    size = 'sm',
    icon = 'shape-circle',
    variant = 'default',
    className,
    ...forwardedProps
  } = props;

  return (
    <UnstyledButton
      ref={ref}
      className={clsx(
        'v2-icon-button',
        `v2-icon-button--size-${size}`,
        `v2-icon-button--variant-${variant}`,
        className
      )}
      {...forwardedProps}
    >
      <Icon name={icon} size={size} />
    </UnstyledButton>
  );
});

IconButton.displayName = '@v2/IconButton';
export { IconButton };
