import clsx from 'clsx';
import { css } from '../select-constants';
import { SelectOptionProps } from '../select-types';
import { UnstyledButton } from '@/core';
import { useSelectContext } from '../select-context';

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
    >
      <UnstyledButton
        value={value}
        onClick={(event) => {
          if (!ctx.disabled || !ctx.readOnly) {
            if (ctx.behavior === 'multiple') {
              return ctx.value.includes(event.currentTarget.value)
                ? ctx.onChange(ctx.value.filter((item) => item !== event.currentTarget.value))
                : ctx.onChange([...ctx.value, event.currentTarget.value]);
            }

            // if (typeof ctx.value === 'string' && ctx.behavior === 'single') {
            //   return ctx.onChange(event.currentTarget.value);
            // }
            // if (!!Array.isArray(ctx.value) && ctx.behavior === 'single') {
            //   const handler = ctx.onChange as unknown as (value: string[]) => void;
            //   return ctx.value.includes(event.currentTarget.value)
            //     ? handler(ctx.value.pop().push(ctx.value))
            //     : handler(ctx.value);
            // }
            // if (!!Array.isArray(ctx.value) && ctx.behavior === 'multiple') {
            //   const handler = ctx.onChange as unknown as (value: string[]) => void;
            //   return (ctx.value as string[]).includes(event.currentTarget.value)
            //     ? handler(ctx.value.filter((item: string) => item !== event.currentTarget.value))
            //     : handler([...ctx.value, event.currentTarget.value]);
            // }
          }
        }}
        className={clsx(
          css.option,
          `${css.option}--scheme-${ctx.scheme}`,
          `${css.option}--variant-${ctx.variant}`
        )}
        data-disabled={disabled}
        aria-disabled={disabled}
        data-readonly={readOnly}
        aria-readonly={readOnly}
      >
        {label}
      </UnstyledButton>
    </li>
  );
};

SelectOption.displayName = '@v2/Select.Option';
export { SelectOption };
