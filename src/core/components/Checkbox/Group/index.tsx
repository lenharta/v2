import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { CheckboxGroupProps } from '../Checkbox.types';
import { CheckboxProvider } from '../Checkbox.context';

type CheckboxGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: CheckboxGroupProps;
}>;

const CheckboxGroup = factory<CheckboxGroupFactory>((props, ref) => {
  const { value, children, className, ...forwardedProps } = props;
  return (
    <div {...forwardedProps} className={clsx('v2-checkbox-group', className)} ref={ref}>
      <CheckboxProvider value={{ value }}>{children}</CheckboxProvider>
    </div>
  );
});

CheckboxGroup.displayName = '@v2/Checkbox.Group';
export { CheckboxGroup };
