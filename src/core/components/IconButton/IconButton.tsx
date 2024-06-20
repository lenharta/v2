import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { UnstyledButton } from '@/core';
import { IconButtonProps } from './IconButton.types';

type IconButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: IconButtonProps;
}>;

const IconButton = factory<IconButtonFactory>((props, ref) => {
  const { children, className, disabled, readOnly, loading, ...forwardedProps } = props;
  return (
    <UnstyledButton
      ref={ref}
      loading={loading}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx('v2-icon-button', className)}
      {...forwardedProps}
    >
      {children}
    </UnstyledButton>
  );
});

IconButton.displayName = '@v2/IconButton';
export { IconButton };
