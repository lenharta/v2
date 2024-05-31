import clsx from 'clsx';
import { Box } from '../Box';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { CheckboxGroup } from './Group';
import { CheckboxProps, CheckboxStatus } from './Checkbox.types';
import { CheckboxIndicator } from './Indicator';
import { useCheckboxContext } from './Checkbox.context';
import { Icon, Icons } from '../Icon';

type CheckboxFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: CheckboxProps;
  omits: 'children';
  comps: {
    Group: typeof CheckboxGroup;
    Indicator: typeof CheckboxIndicator;
  };
}>;

const CHECKBOX_ICON_LOOKUP: Record<CheckboxStatus, keyof typeof Icons> = {
  ['true']: 'checkboxChecked',
  ['false']: 'checkboxUnchecked',
  ['mixed']: 'checkboxIndeterminate',
};

const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const { label, className, indeterminate, onChange, checked, disabled, ...forwardedProps } = props;

  const ctx = useCheckboxContext() || {};

  let checkedStatus: CheckboxStatus = 'false';

  if (ctx.value && ctx.value?.includes(forwardedProps.value as string)) {
    checkedStatus = 'true';
  }
  if (indeterminate) {
    checkedStatus = 'mixed';
  }
  if (checked) {
    checkedStatus = 'true';
  }

  const contextProps = ctx
    ? {
        checked: ctx.value?.includes(forwardedProps.value as string),
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          ctx.onChange?.(event);
          onChange?.(event);
        },
      }
    : {};

  return (
    <Box className={clsx('v2-checkbox', className)}>
      <span className="v2-checkbox-inner">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          className="v2-checkbox-input"
          aria-disabled={disabled}
          data-disabled={disabled}
          onChange={onChange}
          {...forwardedProps}
          {...contextProps}
        />

        <Icon name={CHECKBOX_ICON_LOOKUP[checkedStatus]} />
        {label && <div className="v2-checkbox-label">{label}</div>}
      </span>
    </Box>
  );
});

Checkbox.Group = CheckboxGroup;
Checkbox.Indicator = CheckboxIndicator;
Checkbox.displayName = '@v2/Checkbox';
export { Checkbox };
