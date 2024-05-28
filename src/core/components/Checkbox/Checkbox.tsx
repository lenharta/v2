import clsx from 'clsx';
import { Icon } from '../Icon';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { InlineInput } from '../InlineInput';
import { CheckboxGroup } from './Group';
import { useCheckboxContext } from './Checkbox.context';
import { CheckboxProps, CheckboxStatus } from './Checkbox.types';

type CheckboxFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: CheckboxProps;
  comps: {
    Group: typeof CheckboxGroup;
  };
}>;

interface CheckboxCheckedProps {
  value: string;
  disabled: string;
  ctx: { value: string; disabled?: boolean | undefined };
}

const lookupStateIcon: Record<CheckboxStatus, React.ReactNode> = {
  checked: <Icon name="checkboxChecked" />,
  unchecked: <Icon name="checkboxUnchecked" />,
  indeterminate: <Icon name="checkboxIndeterminate" />,
};

const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const { label, value, disabled, className, children, ...forwardedProps } = props;

  // const isChecked =

  const ctx = useCheckboxContext();
  const merge = { ...ctx, disabled };

  return (
    <InlineInput
      {...forwardedProps}
      className={clsx('v2-checkbox', className)}
      disabled={merge.disabled || undefined}
      value={value}
      label={label}
      ref={ref}
    >
      {children}
    </InlineInput>
  );
});

Checkbox.Group = CheckboxGroup;
Checkbox.displayName = '@v2/Checkbox';
export { Checkbox };
