import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface DividerProps {
  /**
   * - Specifies a `label` for the `Divider` element to give additional context.
   * - The label can be render to the `left` -or `right` side of the container.
   * @see {DividerProps.labelPosition}
   * @default undefined
   */

  label?: React.ReactNode | undefined;

  /**
   * Specifies the position of the `label` element relative to its `Divider` container.
   * @see {DividerProps.label}
   * @default 'left'
   */

  labelPosition?: 'left' | 'right' | undefined;

  /**
   * Defines a default html `class` appended to the `Divider` element classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'divider'
   */

  className?: string | undefined;
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
