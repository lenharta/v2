import { Factory } from '@/types';
import { CheckboxGroup } from './Group';
import { useCheckboxContext } from './Checkbox.context';
import { CheckboxCSS, CheckboxRootProps, CheckboxStatus, CheckboxStatusProps } from './types';
import { Box, Icon, IconProps, Text, createKeyDownGroup, factory, useThemeClasses } from '@/core';

const css: Partial<CheckboxCSS> = {
  root: 'v2-checkbox',
  copy: 'v2-checkbox-copy',
  input: 'v2-checkbox-input',
  label: 'v2-checkbox-label',
  error: 'v2-checkbox-error',
  message: 'v2-checkbox-description',
};

const CHECKBOX_ICON_MAP: Record<CheckboxStatus, IconProps['name']> = {
  ['true']: 'checkboxChecked',
  ['false']: 'checkboxUnchecked',
  ['mixed']: 'checkboxIndeterminate',
};

type CheckboxFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: CheckboxRootProps;
  omits: 'children' | 'size';
  comps: {
    Group: typeof CheckboxGroup;
  };
}>;

function getCheckboxStatus(props: CheckboxStatusProps) {
  const { checked, ctx, value, disabled, readOnly, indeterminate } = props;

  const isDisabled = readOnly && disabled;
  const isChecked = !isDisabled && !!checked;
  const isSelected = isChecked && !!(ctx.value && ctx.value.includes(value as string));
  const isIndeterminate = indeterminate !== undefined;

  let checkedStatus: CheckboxStatus = 'false';

  const conditions: { value: CheckboxStatus; condition?: boolean | undefined }[] = [
    { value: 'true', condition: isSelected && !isIndeterminate },
    { value: 'mixed', condition: isSelected && isIndeterminate },
    { value: 'true', condition: isChecked && !isIndeterminate },
    { value: 'mixed', condition: isChecked && isIndeterminate },
  ];

  conditions.forEach((item) => {
    if (item.condition === true) {
      checkedStatus = item.value;
    }
  });
  return checkedStatus;
}

const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const {
    size,
    value,
    label,
    error,
    scheme,
    rootRef,
    variant,
    message,
    checked,
    disabled,
    readOnly,
    className,
    indeterminate,
    onChange,
    ...forwardedProps
  } = props;

  const ctx = useCheckboxContext();

  let checkedStatus: CheckboxStatus = 'false';

  const conditions: { value: CheckboxStatus; condition?: boolean | undefined }[] = [
    { value: 'true', condition: ctx && ctx.value && ctx.value.includes(value as string) },
    { value: 'true', condition: checked && !indeterminate },
    { value: 'mixed', condition: checked && indeterminate },
  ];

  conditions.forEach((item) => {
    if (item.condition === true) {
      checkedStatus = item.value;
    }
  });

  const themeClasses = useThemeClasses({
    prefix: css.root!,
    props: { size, scheme, variant },
    context: { size: ctx.size, scheme: ctx.scheme, variant: ctx.variant },
    defaultProps: { size: 'sm', scheme: 'default', variant: 'default' },
    className,
  });

  const contextProps = ctx
    ? {
        checked: ctx.value?.includes(value as string),
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          if (!disabled || !readOnly) {
            ctx.onChange?.(event);
            onChange?.(event);
          }
        },
        onKeyDown: createKeyDownGroup({
          orientation: ctx.orientation,
          preventDefault: false,
          parentSelector: '[data-checkbox-group]',
          childSelector: '[data-checkbox-item]',
          onKeyDown: forwardedProps.onKeyDown,
          loop: false,
        }),
        'data-checkbox-item': true,
        'aria-disabled': ctx.disabled || disabled,
        'data-disabled': ctx.disabled || disabled,
        'aria-checked': checkedStatus,
        'data-checked': checkedStatus,
      }
    : {
        checked,
        onChange,
        'aria-disabled': disabled,
        'data-disabled': disabled,
        'aria-checked': checkedStatus,
        'data-checked': checkedStatus,
      };

  return (
    <Box ref={rootRef} className={css.root} component="div">
      <input
        ref={ref}
        type="checkbox"
        className={themeClasses}
        {...forwardedProps}
        {...contextProps}
      />

      <Icon name={CHECKBOX_ICON_MAP[checkedStatus]} />

      <Box className={css.copy}>
        <Text className={css.label}>{label}</Text>
        {error && <Text className={css.error}>{error}</Text>}
        {message && <Text className={css.message}>{message}</Text>}
      </Box>
    </Box>
  );
});

Checkbox.Group = CheckboxGroup;
Checkbox.displayName = '@v2/Checkbox';
export { Checkbox };
