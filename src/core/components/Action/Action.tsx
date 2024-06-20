import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { ActionProps } from './Action.types';
import { UnstyledButton } from '@/core';

type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ActionProps;
}>;

const Action = factory<ActionFactory>((props, ref) => {
  const { children, className, disabled, readOnly, ...forwardedProps } = props;
  return (
    <UnstyledButton ref={ref} className={clsx('v2-action', className)} {...forwardedProps}>
      {children}
    </UnstyledButton>
  );
});

Action.displayName = '@v2/Action';
export { Action };
