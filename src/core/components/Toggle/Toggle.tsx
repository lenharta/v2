import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { UnstyledButton } from '@/core';
import { ToggleProps } from './types';

type ToggleFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ToggleProps;
}>;

const Toggle = createFactory<ToggleFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;

  return (
    <UnstyledButton ref={ref} className={clsx('v2-toggle', className)} {...forwardedProps}>
      {children}
    </UnstyledButton>
  );
});

Toggle.displayName = '@v2/Toggle';
export { Toggle };
