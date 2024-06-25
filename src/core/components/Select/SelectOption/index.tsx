import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { UnstyledButton } from '@/core';
import { SelectOptionProps } from '../Select.types';

type SelectOptionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SelectOptionProps;
}>;

const SelectOption = createFactory<SelectOptionFactory>((props, ref) => {
  const { label, value, variant, disabled, readOnly, selected, size, ...forwardedProps } = props;

  return (
    <UnstyledButton
      ref={ref}
      value={value}
      label={label}
      disabled={disabled}
      readOnly={readOnly}
      selected={selected}
      className={clsx(
        'v2-select-option',
        `v2-select-option--${variant}`,
        `v2-select-option--size-${size}`
      )}
      {...forwardedProps}
    >
      {label}
    </UnstyledButton>
  );
});

SelectOption.displayName = '@v2/Select.Option';
export { SelectOption };
