import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { UnstyledButtonProps } from './UnstyledButton.types';

type UnstyledButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: UnstyledButtonProps;
}>;

const UnstyledButton = factory<UnstyledButtonFactory>((props, ref) => {
  const { children, className, disabled, readOnly, loading, ...forwardedProps } = props;

  return (
    <button
      ref={ref}
      className={clsx('v2-button-u', className)}
      aria-busy={loading}
      aria-disabled={disabled}
      aria-readonly={readOnly}
      data-readonly={readOnly}
      data-disabled={disabled}
      data-loading={loading}
      {...forwardedProps}
    >
      {children}
    </button>
  );
});

UnstyledButton.displayName = '@v2/UnstyledButton';
export { UnstyledButton };
