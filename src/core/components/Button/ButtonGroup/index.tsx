import clsx from 'clsx';
import { factory } from '@/core';
import { Factory } from '@/types';
import { ButtonGroupProps } from '../Button.types';

type ButtonGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ButtonGroupProps;
}>;

const ButtonGroup = factory<ButtonGroupFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;

  return (
    <div ref={ref} className={clsx('v2-button-group', className)} {...forwardedProps}>
      {children}
    </div>
  );
});

ButtonGroup.displayName = '@v2/Button.Group';
export { ButtonGroup };
