import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Floating, UnstyledButton, SelectTargetProps, useFloatingContext } from '@/core';

type SelectTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SelectTargetProps;
}>;

const SelectTarget = createFactory<SelectTargetFactory>((props, ref) => {
  const { value, variant, placeholder, className, ...forwardedProps } = props;

  const ctx = useFloatingContext();

  return (
    <Floating.Target>
      <UnstyledButton
        ref={ref}
        data-selected={!!ctx.isOpen || undefined}
        className={clsx(
          'v2-select-target',
          { [`v2-select-target--${variant}`]: variant },
          className
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
