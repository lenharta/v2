import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { UnstyledButtonProps } from './types';

type UnstyledButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: UnstyledButtonProps;
}>;

const UnstyledButton = createFactory<UnstyledButtonFactory>((props, ref) => {
  const { children, className, disabled, selected, readOnly, loading, onClick, ...forwardedProps } =
    props;

  return (
    <button
      ref={ref}
      className={clsx('v2-button-unstyled', className)}
      aria-busy={!!loading || undefined}
      aria-selected={!!selected || undefined}
      aria-disabled={!!disabled || undefined}
      aria-readonly={!!readOnly || undefined}
      data-readonly={!!readOnly || undefined}
      data-disabled={!!disabled || undefined}
      data-selected={!!selected || undefined}
      data-loading={!!loading || undefined}
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
