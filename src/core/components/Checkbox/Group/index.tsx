import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { CheckboxProvider } from '../Checkbox.context';
import { CheckboxCSS, CheckboxGroupProps } from '../types';

const css: Partial<CheckboxCSS> = {
  group: 'v2-checkbox-group',
};

type CheckboxGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: CheckboxGroupProps;
  omits: 'onChange';
}>;

const CheckboxGroup = factory<CheckboxGroupFactory>((props, ref) => {
  const {
    id,
    size,
    value,
    scheme,
    variant,
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

  const uid = React.useId();

  const getItemId = (value: string) => `checkbox-item${uid}${value}`;
  const getGroupId = () => `checkbox:group${!id ? uid : uid + id}`;

  const contextProps = {
    id: getGroupId(),
    'aria-orientation': orientation,
    'data-orientation': orientation,
    'data-checkbox-group': true,
  };

  return (
    <Box ref={ref} className={clsx(css.group, className)} {...forwardedProps} {...contextProps}>
      <CheckboxProvider
        value={{ size, value, scheme, variant, orientation, getItemId, getGroupId, onChange }}
      >
        {children}
      </CheckboxProvider>
    </Box>
  );
});

CheckboxGroup.displayName = '@v2/Checkbox.Group';
export { CheckboxGroup };
