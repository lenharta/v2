import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { UnstyledButton, SelectOptionProps } from '@/core';

type SelectOptionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SelectOptionProps;
}>;

const SelectOption = createFactory<SelectOptionFactory>((props, ref) => {
  const { label, value, disabled, readOnly, selected, className, ...forwardedProps } = props;

  return (
    <UnstyledButton
      ref={ref}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      selected={selected}
      className={clsx('v2-select-option', className)}
      {...forwardedProps}
    >
      {label}
    </UnstyledButton>
  );
});

SelectOption.displayName = '@v2/Select.Option';
export { SelectOption };
