import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { CheckboxProvider } from '../context';
import clsx from 'clsx';

export interface CheckboxGroupProps extends Core.BaseProps {
  /** A string representing the `Checkbox.Group` value. */
  value: string[];
  /** Defines legend for the `Checkbox.Group`. */
  group: string;
  /** Defines a change event handler for the element. */
  onChange: (value: string[]) => void;
  /** Indicates a `disabled` state for the `Checkbox.Group`. */
  disabled?: boolean | undefined;
  /** Specifies the directional layout and provided to the `aria-orientation` property of the `Checkbox.Group`. */
  orientation?: Core.Orientation;
}

export type CheckboxGroupFactory = Factory.Config<{
  ref: HTMLFieldSetElement;
  comp: 'fieldset';
  props: CheckboxGroupProps;
  omits: 'onChange';
}>;

function formatGroupId(group: string): string {
  const data = group.split(' ').join('-').trim();
  return data.toLowerCase();
}

export const CheckboxGroup = factory<CheckboxGroupFactory>((props, ref) => {
  const {
    value,
    group,
    onChange,
    children,
    className,
    orientation = 'horizontal',
    ...otherProps
  } = props;

  const groupId = formatGroupId(group);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const currentItem = event.currentTarget.value!;
    const clonedItems = [...value];
    onChange?.(
      clonedItems.includes(currentItem)
        ? clonedItems.filter((v) => v !== currentItem)
        : [...clonedItems, currentItem]
    );
  };

  return (
    <fieldset
      {...otherProps}
      ref={ref}
      className={clsx('checkbox-group', className)}
      aria-orientation={orientation}
    >
      <legend>{group}</legend>
      <CheckboxProvider value={{ groupId, value, onChange: handleChange }}>
        {children}
      </CheckboxProvider>
    </fieldset>
  );
});

CheckboxGroup.displayName = '@v2/core/Checkbox.Group';
