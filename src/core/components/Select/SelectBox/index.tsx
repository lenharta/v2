import clsx from 'clsx';
import { Factory } from '@/types';
import { Floating } from '@/core';
import { createFactory } from '@/factory';
import { SelectBoxProps } from '../Select.types';

type SelectBoxFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: SelectBoxProps;
}>;

const SelectBox = createFactory<SelectBoxFactory>((props, ref) => {
  const { children, variant, ...forwardedProps } = props;
  return (
    <Floating.Box>
      <div
        ref={ref}
        className={clsx('v2-select-box', `v2-select-box--${variant}`)}
        {...forwardedProps}
      >
        {children}
      </div>
    </Floating.Box>
  );
});

SelectBox.displayName = '@v2/Select.Box';
export { SelectBox };
