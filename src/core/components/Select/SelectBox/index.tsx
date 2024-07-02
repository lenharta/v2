import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Floating, SelectBoxProps } from '@/core';

type SelectBoxFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: SelectBoxProps;
}>;

const SelectBox = createFactory<SelectBoxFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;

  return (
    <Floating.Box>
      <div ref={ref} className={clsx('v2-select-box', className)} {...forwardedProps}>
        {children}
      </div>
    </Floating.Box>
  );
});

SelectBox.displayName = '@v2/Select.Box';
export { SelectBox };
