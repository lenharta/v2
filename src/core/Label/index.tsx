import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface LabelProps {
  disabled?: boolean | undefined;
}

export type LabelFactory = Core.Factory<{
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
