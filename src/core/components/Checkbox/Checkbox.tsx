import clsx from 'clsx';
import { Box } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { CheckboxGroup } from './Group';
import { CheckboxIndicator } from './Indicator';
import { createKeyDownGroup } from '@/core/utils';
import { useCheckboxContext } from './Checkbox.context';
import { CheckboxProps, CheckboxStatus } from './Checkbox.types';
import { getCheckboxProps, getCheckboxStatus } from './utils';

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

const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const {
    label,
    error,
    variant = 'default',
    checked,
    disabled,
    readOnly,
    onChange,
    onKeyDown,
    className,
    description,
    indeterminate,
    ...forwardedProps
  } = props;

  const ctx = useCheckboxContext() || {};

  const checkedStatus = getCheckboxStatus({
    ctx: { value: ctx.value },
    value: forwardedProps.value,
    indeterminate,
    readOnly,
    disabled,
    checked,
  });

  const contextProps = getCheckboxProps({
    ctx,
    value: forwardedProps.value,
    disabled,
    readOnly,
    parentSelector: '[data-checkbox-group]',
    childSelector: '[data-checkbox-item]',
    onKeyDown,
    onChange,
  });

  return (
    <Box className={clsx('v2-checkbox', `v2-checkbox--${variant}`, className)}>
      <span className="v2-checkbox-inner">
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          className="v2-checkbox-input"
          aria-checked={checkedStatus}
          aria-disabled={disabled}
          aria-readonly={readOnly}
          data-disabled={disabled}
          data-readonly={readOnly}
          onChange={onChange}
          {...forwardedProps}
          {...contextProps}
        />

        <Checkbox.Indicator status={checkedStatus} />

        <div className="v2-checkbox-copy">
          {label && <div className="v2-checkbox-label">{label}</div>}
          {description && <div className="v2-checkbox-desc">{description}</div>}
          {error && <div className="v2-checkbox-error">{error}</div>}
        </div>
      </span>
    </Box>
  );
});

Checkbox.Group = CheckboxGroup;
Checkbox.Indicator = CheckboxIndicator;
Checkbox.displayName = '@v2/Checkbox';
export { Checkbox };
