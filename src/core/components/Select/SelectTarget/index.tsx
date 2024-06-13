import clsx from 'clsx';
import { css } from '../select-constants';
import { Select } from '../Select';
import { useSelectContext } from '../select-context';
import { SelectTargetProps } from '../select-types';
import { Floating, useFloatingContext } from '@/core';

type SelectTargetFactory = React.FC<SelectTargetProps> & {};

const SelectTarget: SelectTargetFactory = (props) => {
  const { placeholder } = props;

  const ctx = useSelectContext();
  const floating = useFloatingContext();

  const getTargetElements = () => {
    if (ctx.value.length <= 0) {
      return placeholder;
    }
    if (ctx.value.length > 0 && ctx.behavior === 'multiple') {
      return ctx.value
        .map((val, index) => {
          return index === 0 ? val : [',', val].join(' ');
        })
        .join('');
    }

    return ctx.value[0] as string;
  };

  return (
    <Floating.Target>
      <button
        data-opened={floating.isOpen || undefined}
        className={clsx(
          css.target,
          `${css.target}--scheme-default`,
          `${css.target}--variant-elevated`
        )}
      >
        <Select.Label value={getTargetElements()} type="target" />
      </button>
    </Floating.Target>
  );
};

SelectTarget.displayName = '@v2/Select.Target';
export { SelectTarget };
