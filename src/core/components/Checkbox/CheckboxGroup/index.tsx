import clsx from 'clsx';
import { Factory } from '@/types';
import { CheckboxGroupProps } from '../types';
import { CheckboxGroupProvider } from '../context';
import { createPolymorphicFactory } from '@/factory';

type CheckboxGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  props: CheckboxGroupProps;
  comp: 'div';
}>;

const CheckboxGroup = createPolymorphicFactory<CheckboxGroupFactory>((props, ref) => {
  const {
    value = [],
    shape,
    children,
    className,
    orientation = 'horizontal',
    component: Component = 'div',
    onChange,
    ...forwardedProps
  } = props;

  const handleChange = (itemValue: string) => {
    return onChange?.(
      value.includes(itemValue)
        ? value.filter((stateItem) => stateItem !== itemValue)
        : [...value, itemValue]
    );
  };

  return (
    <Component ref={ref} className={clsx('v2-checkbox-group', className)} {...forwardedProps}>
      <CheckboxGroupProvider value={{ value, onChange: handleChange, shape }}>
        {children}
      </CheckboxGroupProvider>
    </Component>
  );
});

CheckboxGroup.displayName = '@v2/Checkbox.Group';
export { CheckboxGroup };
