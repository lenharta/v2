import clsx from 'clsx';
import { Factory } from '@/types';
import { ToolButtonProps } from './ToolButton.types';
import { factory, Icon, UnstyledButton } from '@/core';

type ToolButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ToolButtonProps;
}>;

const ToolButton = factory<ToolButtonFactory>((props, ref) => {
  const {
    size = 'sm',
    icon = 'close-x-circle',
    variant = 'default',
    iconVariant = 'outline',
    className,
    ...forwardedProps
  } = props;

  return (
    <UnstyledButton
      ref={ref}
      className={clsx(
        'v2-tool-button',
        `v2-icon-button--size-${size}`,
        `v2-icon-button--variant-${variant}`,
        className
      )}
      {...forwardedProps}
    >
      <Icon name={icon} size={size} variant={iconVariant} />
    </UnstyledButton>
  );
});

ToolButton.displayName = '@v2/ToolButton';
export { ToolButton };
