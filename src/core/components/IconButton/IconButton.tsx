import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Icon, UnstyledButton, IconButtonProps } from '@/core';

type IconButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: IconButtonProps;
}>;

const IconButton = createFactory<IconButtonFactory>((props, ref) => {
  const { icon, type, loading, disabled, readOnly, selected, className, ...forwardedProps } = props;

  return (
    <UnstyledButton
      ref={ref}
      loading={loading}
      selected={selected}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx('v2-icon-button', className)}
      {...forwardedProps}
    >
      <Icon name={icon} type={type} />
    </UnstyledButton>
  );
});

IconButton.displayName = '@v2/IconButton';
export { IconButton };
