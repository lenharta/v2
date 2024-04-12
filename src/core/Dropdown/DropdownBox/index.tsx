import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface DropdownBoxProps {
  className?: string | undefined;
  children?: React.ReactNode | undefined;
}

export type DropdownBoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DropdownBoxProps;
}>;

export const DropdownBox = factory<DropdownBoxFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className={clsx(className, 'dropdown-box')}>
      {children}
    </div>
  );
});

DropdownBox.displayName = '@v2/core/Dropdown.Box';
