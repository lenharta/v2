import { CheckboxContext } from '../../Checkbox.types';
import { createKeyDownGroup } from '@/core/utils';

interface GetCheckboxProps {
  ctx?: CheckboxContext | undefined;
  value?: string | number | readonly string[] | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onKeyDown?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
  parentSelector: string;
  childSelector: string;
}

function getCheckboxProps({
  ctx,
  value,
  disabled,
  readOnly,
  onChange,
  onKeyDown,
  parentSelector,
  childSelector,
}: GetCheckboxProps) {
  if (!ctx) return {};

  return {
    'data-checkbox-item': true,
    checked: ctx.value?.includes(value as string),
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled || !readOnly) {
        ctx.onChange?.(event);
        onChange?.(event);
      }
    },
    onKeyDown: createKeyDownGroup({
      orientation: ctx.orientation,
      parentSelector,
      childSelector,
      onKeyDown,
      loop: false,
    }),
  };
}

export { getCheckboxProps };
