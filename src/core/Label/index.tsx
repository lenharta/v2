import { Core, Factory } from '@/types';
import { factory } from '../factory';
import clsx from 'clsx';

export interface LabelProps extends Core.BaseProps {
  /** Indicates a `disabled` state for the `Label`. */
  disabled?: boolean | undefined;
}

export type LabelFactory = Factory.Config<{
  ref: HTMLLabelElement;
  comp: 'label';
  props: LabelProps;
}>;

export const Label = factory<LabelFactory>((props, ref) => {
  const { children, className, disabled, ...otherProps } = props;

  const dataProps = {
    ...(disabled ? { 'data-disabled': true } : {}),
  };

  return (
    <label {...otherProps} {...dataProps} ref={ref} className={clsx('input-label', className)}>
      {children}
    </label>
  );
});
