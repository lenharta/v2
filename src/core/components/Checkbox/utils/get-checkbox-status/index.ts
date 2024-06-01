import { CheckboxStatus } from '../../Checkbox.types';

interface GetCheckboxStatusProps {
  ctx: { value?: string[] | undefined };
  value?: string | number | readonly string[] | undefined;
  checked?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
  indeterminate?: boolean | undefined;
}

function getCheckboxStatus({
  checked,
  ctx,
  value,
  disabled,
  readOnly,
  indeterminate,
}: GetCheckboxStatusProps) {
  const isBlocked = readOnly && disabled;
  const isChecked = !isBlocked && !!checked;
  const isSelected = !isChecked && !!(ctx.value && ctx.value.includes(value as string));
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

export { getCheckboxStatus };
