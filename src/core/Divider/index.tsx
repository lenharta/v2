import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface DividerProps extends Core.BaseProps {
  /** Specifies a `label` for the `Divider` element to give additional context, can be render to the `left` or `right` side of the container. */
  label?: React.ReactNode | undefined;

  /** Specifies the position of the `label` element relative to its `Divider` container. */
  labelPosition?: 'left' | 'right' | undefined;
}

export type DividerFactory = Factory.Config<{
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
