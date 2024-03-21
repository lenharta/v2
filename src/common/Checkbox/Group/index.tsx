import * as React from 'react';
import { mergeProps } from '@/utils';
import { useInputIds } from '@/hooks';
import { Size, Orientation, ElementProps } from '@/types';
import { CheckboxProvider } from '../context';

export interface CheckboxGroupProps extends Omit<ElementProps<'fieldset'>, 'onChange'> {
  orientation?: Orientation;
  disabled?: boolean;
  onChange: (value: string[]) => void;
  legend?: string;
  value: string[];
  size?: Size;
}

const defaultProps: Partial<CheckboxGroupProps> = {
  orientation: 'vertical',
  size: 'sm',
};

export const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (props, ref) => {
    const { size, value, legend, children, disabled, orientation, onChange, ...otherProps } =
      mergeProps(defaultProps, props);

    const uids = useInputIds(legend, ['legend']);

    const onGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const currentItems = event.currentTarget.value!;
      const clonedItems = [...currentItems];
      onChange(
        clonedItems.includes(currentItems)
          ? clonedItems.filter((v) => v !== currentItems)
          : [...clonedItems, currentItems]
      );
    };

    return (
      <fieldset
        {...otherProps}
        ref={ref}
        className="checkbox-group"
        data-diabled={!disabled ? true : undefined}
        aria-diabled={!disabled ? true : undefined}
        data-orientation={orientation}
        aria-orientation={orientation}
      >
        {legend && <legend id={uids.legend}>{legend}</legend>}
        <CheckboxProvider
          value={{ value, size, orientation, legend: uids.legend, onChange: onGroupChange }}
        >
          {children}
        </CheckboxProvider>
      </fieldset>
    );
  }
);

CheckboxGroup.displayName = '@v2/Checkbox.Group';
