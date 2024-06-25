import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { DividerProps } from './Divider.types';

type DividerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DividerProps;
}>;

const Divider = createFactory<DividerFactory>((props, ref) => {
  const {
    size = 'sm',
    icon,
    label,
    variant = 'default',
    decoration = 'solid',
    iconPosition = 'start',
    labelPosition = 'start',
    className,
    ...forwardedProps
  } = props;

  return (
    <div
      ref={ref}
      role="separator"
      data-position={labelPosition}
      className={clsx(
        'v2-divider',
        `v2-divider--${variant}`,
        `v2-divider--size-${size}`,
        `v2-divider--decoration-${decoration}`,
        className
      )}
      {...forwardedProps}
    >
      <div className="v2-divider-content">
        {icon && iconPosition === 'start' && icon}

        {label && (
          <span
            className="v2-divider-label"
            data-position={labelPosition}
            data-with-icon={!!icon || undefined}
          >
            {label}
          </span>
        )}

        {icon && iconPosition === 'end' && icon}
      </div>
    </div>
  );
});

Divider.displayName = '@v2/Divider';
export { Divider };
