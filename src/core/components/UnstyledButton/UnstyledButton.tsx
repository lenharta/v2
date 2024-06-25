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
  const { children, className, disabled, selected, readOnly, loading, onClick, ...forwardedProps } =
    props;

  return (
    <button
      ref={ref}
      className={clsx('v2-button-u', className)}
      aria-busy={loading}
      aria-selected={selected}
      aria-disabled={disabled}
      aria-readonly={readOnly}
      data-readonly={readOnly}
      data-disabled={disabled}
      data-selected={selected}
      data-loading={loading}
      onClick={(event) => {
        if (!disabled && !readOnly && !loading) {
          onClick?.(event);
        }
      }}
      {...forwardedProps}
    >
      {children}
    </button>
  );
});

UnstyledButton.displayName = '@v2/UnstyledButton';
export { UnstyledButton };
