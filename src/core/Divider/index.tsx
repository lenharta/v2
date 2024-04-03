import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface DividerProps {
  label?: React.ReactNode | undefined;
  labelPosition?: 'left' | 'right' | undefined;
}

export type DividerFactory = Core.Factory<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DividerProps;
  omits: 'children';
}>;

export const Divider = factory<DividerFactory>((props, ref) => {
  const { className, label, labelPosition = 'left', ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className={clsx('divider', className)}>
      {label && (
        <span data-position={labelPosition} className="label">
          {label}
        </span>
      )}
    </div>
  );
});

Divider.displayName = '@v2/core/Divider';
