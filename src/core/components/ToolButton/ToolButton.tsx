import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { UnstyledButton } from '@/core';
import { ToolButtonProps } from './types';

type ToolButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ToolButtonProps;
}>;

const ToolButton = createFactory<ToolButtonFactory>((props, ref) => {
  const { children, className, disabled, selected, readOnly, loading, ...forwardedProps } = props;

  return (
    <UnstyledButton
      ref={ref}
      loading={loading}
      selected={selected}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx('v2-tool-button', className)}
      {...forwardedProps}
    >
      {children}
    </UnstyledButton>
  );
});

ToolButton.displayName = '@v2/ToolButton';
export { ToolButton };
