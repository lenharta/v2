import clsx from 'clsx';
import { css } from '../select-constants';
import { Icon, UnstyledButton } from '@/core';
import { useSelectContext } from '../select-context';
import { SelectOptionProps } from '../select-types';

type SelectOptionFactory = React.FC<SelectOptionProps> & {};

const SelectOption: SelectOptionFactory = (props) => {
  const { label, value, disabled, readOnly } = props;

  const ctx = useSelectContext();

  return (
    <li
      className={clsx(
        css.item,
        `${css.item}--scheme-${ctx.scheme}`,
        `${css.item}--variant-${ctx.variant}`
      )}
      data-selected={ctx.value.includes(value) || undefined}
      data-disabled={disabled}
      data-readonly={readOnly}
    >
      <UnstyledButton
        role="listitem"
        value={value}
        className={clsx(
          css.option,
          `${css.option}--scheme-${ctx.scheme}`,
          `${css.option}--variant-${ctx.variant}`
        )}
        onClick={(event) => {
          if (!ctx.disabled || !ctx.readOnly) {
            if (ctx.behavior === 'multiple') {
              return ctx.value.includes(event.currentTarget.value)
                ? ctx.onChange(ctx.value.filter((item) => item !== event.currentTarget.value))
                : ctx.onChange([...ctx.value, event.currentTarget.value]);
            }
            return ctx.onChange([event.currentTarget.value]);
          }
        }}
        aria-selected={ctx.value.includes(value) || undefined}
        aria-disabled={disabled}
        aria-readonly={readOnly}
      >
        {label}
        {ctx.value.includes(value) && <Icon name="check-circle" />}
      </UnstyledButton>
    </li>
  );
};

SelectOption.displayName = '@v2/Select.Option';
export { SelectOption };
