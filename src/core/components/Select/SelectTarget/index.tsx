import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { SelectTargetProps } from '../Select.types';
import { Floating, UnstyledButton } from '@/core';

type SelectTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SelectTargetProps;
}>;

const SelectTarget = createFactory<SelectTargetFactory>((props, ref) => {
  const { size, value, variant, placeholder, ...forwardedProps } = props;

  return (
    <Floating.Target>
      <UnstyledButton
        ref={ref}
        className={clsx(
          'v2-select-option',
          `v2-select-option--${variant}`,
          `v2-select-option--size-${size}`
        )}
        {...forwardedProps}
      >
        {value || placeholder}
      </UnstyledButton>
    </Floating.Target>
  );
});

SelectTarget.displayName = '@v2/Select.Target';
export { SelectTarget };
