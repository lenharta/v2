import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { createPolymorphicFactory } from '@/factory';
import { CheckboxProvider } from '../CheckboxContext';

export type CheckboxGroupCSS = Core.CSS<'root'>;

export type CheckboxGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  props: Core.CheckboxGroupProps;
  comp: 'div';
}>;

const css: CheckboxGroupCSS = {
  root: 'v2-checkbox-group',
};

const CheckboxGroup = createPolymorphicFactory<CheckboxGroupFactory>((props, ref) => {
  const {
    value = [],
    shape,
    children,
    className,
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
    <Component ref={ref} className={clsx(css.root, className)} {...forwardedProps}>
      <CheckboxProvider value={{ value, onChange: handleChange, shape }}>
        {children}
      </CheckboxProvider>
    </Component>
  );
});

CheckboxGroup.displayName = '@v2/Checkbox.Group';
export { CheckboxGroup };
