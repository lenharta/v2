import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { CheckboxGroupProps } from '../Checkbox.types';
import { CheckboxGroupProvider } from '../Checkbox.context';

type CheckboxGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: CheckboxGroupProps;
  omits: 'onChange';
}>;

const CheckboxGroup = factory<CheckboxGroupFactory>((props, ref) => {
  const {
    value,
    children,
    className,
    orientation = 'vertical',
    onChange: setValue,
    ...forwardedProps
  } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue?.(
      value.includes(event.currentTarget.value)
        ? value.filter((i) => i !== event.currentTarget.value)
        : [...value, event.currentTarget.value]
    );
  };

  return (
    <Box
      {...forwardedProps}
      className={clsx('v2-checkbox-group', className)}
      data-orientation={orientation}
      aria-orientation={orientation}
      data-checkbox-group
      ref={ref}
    >
      <CheckboxGroupProvider value={{ value, onChange, orientation }}>
        <React.Fragment>{children}</React.Fragment>
      </CheckboxGroupProvider>
    </Box>
  );
});

CheckboxGroup.displayName = '@v2/Checkbox.Group';
export { CheckboxGroup };
