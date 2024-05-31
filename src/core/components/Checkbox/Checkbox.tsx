import clsx from 'clsx';
import { Box } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { CheckboxGroup } from './Group';
import { CheckboxIndicator } from './Indicator';
import { createKeyDownGroup } from '@/core/utils';
import { useCheckboxContext } from './Checkbox.context';
import { CheckboxProps, CheckboxStatus } from './Checkbox.types';

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

function getCheckboxStatus(props: {
  ctx: { value?: string[] | undefined };
  value?: string | number | readonly string[] | undefined;
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  indeterminate?: boolean | undefined;
}) {
  const { checked, ctx, value, disabled, indeterminate } = props;

  let checkedStatus: CheckboxStatus = 'false';

  if (ctx && ctx.value) {
    if (!disabled && ctx.value.includes(value as string)) {
      checkedStatus = 'true';
    }
  }
  if (!disabled && checked) {
    checkedStatus = 'true';
  }
  if (!disabled && indeterminate) {
    checkedStatus = 'mixed';
  }

  return checkedStatus;
}

const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const { label, className, indeterminate, onChange, checked, disabled, ...forwardedProps } = props;

  const ctx = useCheckboxContext() || {};

  const checkedStatus = getCheckboxStatus({
    ctx: { value: ctx.value },
    value: forwardedProps.value,
    indeterminate,
    disabled,
    checked,
  });

  const contextProps = ctx
    ? {
        'data-checkbox-item': true,
        checked: ctx.value?.includes(forwardedProps.value as string),
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          ctx.onChange?.(event);
          onChange?.(event);
        },
        onKeyDown: createKeyDownGroup({
          parentSelector: '[data-checkbox-group]',
          childSelector: '[data-checkbox-item]',
          orientation: ctx.orientation,
          onKeyDown: forwardedProps.onKeyDown,
          loop: false,
        }),
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
          aria-checked={checkedStatus}
          aria-disabled={disabled}
          data-disabled={disabled}
          onChange={onChange}
          {...forwardedProps}
          {...contextProps}
        />

        <Checkbox.Indicator status={checkedStatus} />
        {label && <div className="v2-checkbox-label">{label}</div>}
      </span>
    </Box>
  );
});

Checkbox.Group = CheckboxGroup;
Checkbox.Indicator = CheckboxIndicator;
Checkbox.displayName = '@v2/Checkbox';
export { Checkbox };
