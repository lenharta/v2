import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Floating, UnstyledButton, SelectTargetProps } from '@/core';

type SelectTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SelectTargetProps;
}>;

const SelectTarget = createFactory<SelectTargetFactory>((props, ref) => {
  const { value, placeholder, className, ...forwardedProps } = props;

  return (
    <Floating.Target>
      <UnstyledButton ref={ref} className={clsx('v2-select-option', className)} {...forwardedProps}>
        {value || placeholder}
      </UnstyledButton>
    </Floating.Target>
  );
});

SelectTarget.displayName = '@v2/Select.Target';
export { SelectTarget };
