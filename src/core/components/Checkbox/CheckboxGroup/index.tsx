import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';
import { CheckboxProvider } from '../CheckboxContext';
import { Group } from '../../Group';

export type CheckboxGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.CheckboxGroupProps;
  element: typeof Group;
}>;

export const CheckboxGroup = PolymorphicComponent<CheckboxGroupFactory>((props, ref) => {
  const {
    gap,
    shape,
    value = [],
    children,
    className,
    isLoading,
    isReadonly,
    isDisabled,
    orientation,
    onValueChange,
    component: Component = 'div',
    ...otherProps
  } = props;

  const handleChange = (itemValue: string) => {
    return onValueChange?.(
      value.includes(itemValue)
        ? value.filter((stateItem) => stateItem !== itemValue)
        : [...value, itemValue]
    );
  };

  return (
    <Component
      {...otherProps}
      className={clsx('v2-checkbox-group', className)}
      orientation={orientation}
      gap={gap}
      ref={ref}
    >
      <CheckboxProvider
        value={{
          onValueChange: handleChange,
          orientation,
          isDisabled,
          isReadonly,
          isLoading,
          value,
          gap,
        }}
      >
        {children}
      </CheckboxProvider>
    </Component>
  );
});

CheckboxGroup.displayName = '@v2/Checkbox.Group';
