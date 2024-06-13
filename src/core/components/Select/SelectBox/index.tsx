import clsx from 'clsx';
import { css } from '../select-constants';
import { Floating } from '@/core';
import { SelectBoxProps } from '../select-types';
import { useSelectContext } from '../select-context';

type SelectBoxFactory = React.FC<SelectBoxProps> & {};

const SelectBox: SelectBoxFactory = ({ children }) => {
  const ctx = useSelectContext();

  const classNames = clsx(
    css.box,
    `${css.box}--scheme-${ctx.scheme}`,
    `${css.box}--variant-${ctx.variant}`
  );

  return (
    <Floating.Box>
      <div className={classNames} role="listbox" tabIndex={-1} style={{ maxHeight: ctx.maxHeight }}>
        {children}
      </div>
    </Floating.Box>
  );
};

SelectBox.displayName = '@v2/Select.Box';
export { SelectBox };
